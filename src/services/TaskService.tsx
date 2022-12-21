import SessionService from './SessionService';
import { supabase } from './SupaBase';

const dayOfWeekLookup = {"Su": 0,"Mo": 1,"Tu": 2,"We": 3, "Th": 4, "Fr": 5, "Sa": 6};

const TaskService = {
    async getTasksByUserId(userId: number){
        return await [{ id: 1, title: 'Brush Teeth', isDoneToday: false, streak: 1, color: '#8295BF', sortOrder: 1, repeatType: "none", weeklySelect: [], monthlySelect: []}, { id: 2, title: 'Code', isDoneToday: true, streak: 1, color: '#FF0000', sortOrder: 2, repeatType: "weekly", weeklySelect: ["Mo", "Tu"], monthlySelect: []}]
    },
    async updateTaskById(taskId){
        return true;
    },
    async createTask(task){
        const userId = await SessionService.getUserID();

        const { data, error } = await supabase.from('tasks').insert({
            user_id: userId,
            title: task.title,
            streak: 0,
            color: task.color,
            weekly_select: task.weeklySelect,
            monthly_select: task.monthlySelect,
            is_done_today: false,
            repeat_type: task.repeatType
        }).select();

        if(task.repeatType === 'weekly'){
            if(!task.weeklySelect.length){
                return { error: 'Must select at least one day' };
            }

            let metaDays = task.weeklySelect.map(day => {
                return {
                    day_of_week: dayOfWeekLookup[day],
                    task_id: 1
                };
            });

            const { error } = await supabase.from('tasks_meta').insert(metaDays);
        }

        if(task.repeatType === 'none'){

        }
    }
}

export default TaskService;