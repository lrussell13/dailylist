import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, LayoutAnimation} from 'react-native';
import TaskService from '../services/TaskService';
import Task from './Task';

function TaskList(){
    const [tasks, setTasks] = useState([{ id: 1, title: 'Brush Teeth', isDoneToday: false, streak: 1, color: '#8295BF', sortOrder: 1, repeatType: "none", weeklySelect: [], monthlySelect: []}, { id: 2, title: 'Brush Teeth', isDoneToday: false, streak: 0, color: '#FF0000', sortOrder: 2, repeatType: "none", weeklySelect: [], monthlySelect: []}]);

    useEffect(() => {
        const getTasks = async () => {
            const tasks = await TaskService.getTasksByUserId(1);
            setTasks(tasks);
        }

        getTasks().catch(console.error);
    }, []);

    const handleTaskPress = (e, id) => {
        const newTask = tasks.find(task => task.id === id);
        
        newTask.isDoneToday = !newTask.isDoneToday;
        newTask.isDoneToday ? newTask.streak++ : newTask.streak--;

        //Todo: update db with newTask
        const newTasks = tasks.map(task => task.id === id ? newTask : task);
        newTasks.sort((a, b) => {
            if (a.isDoneToday === b.isDoneToday){
                return a.sortOrder < b.sortOrder ? -1 : 1
            } else {
                return a.isDoneToday < b.isDoneToday ? -1 : 1
            }
        });
        
        LayoutAnimation.easeInEaseOut();
        setTasks(newTasks);
    }

    return (
        <ScrollView style={styles.taskList}>
            {tasks.map(task => 
                <Task key={task.id} task={task} handleTaskPress={handleTaskPress}></Task>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
   taskList: {
    marginTop: 24
   }
})

export default TaskList;