import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ColorPicker from '../components/ColorPicker';
import Header from '../components/Header';
import Task from '../components/Task';
import WeeklyPicker from '../components/WeeklyPicker';
import MonthlyPicker from '../components/MonthlyPicker';
import TaskService from '../services/TaskService';

function CreateTask(){
    const repeatTypes = [{label: "None", value: "none"}, {label: "Daily", value: "daily"}, {label: "Weekly", value: "weekly"}, {label: "Monthly", value: "monthly"}]
    const [task, setState] = useState({ id: 1, title: 'Title', isDoneToday: false, streak: 0, color: '#413C58', sortOrder: 0, repeatType: "none", weeklySelect: [], monthlySelect: []});

    const handleTaskPress = (e, id) => {
        const newTask = task;
        
        newTask.isDoneToday = !newTask.isDoneToday;
        newTask.isDoneToday ? newTask.streak++ : newTask.streak--;

        setState({...newTask});
    }

    const handleUpdateTitle = text => {
        setState({...task, title: text});
    }

    const handleUpdateColor = color => {       
        setState({...task, color: color});
    }

    const handleRepeatType = repeatType => {     
        setState({...task, repeatType: repeatType.value});
    }

    const handleWeeklySelect = day => {    
        const newArray = task.weeklySelect;   
        
        const index = newArray.indexOf(day);
        if (index > -1) { 
            newArray.splice(index, 1);
        }

        if(index <= -1) {
            newArray.push(day);
        }

        setState({...task, weeklySelect: newArray});
    }

    const handleMonthlySelect = day => {    
        const newArray = task.monthlySelect;   
        
        const index = newArray.indexOf(day);
        if (index > -1) { 
            newArray.splice(index, 1);
        }

        if(index <= -1) {
            newArray.push(day);
        }

        setState({...task, monthlySelect: newArray});
    }

    const CreateTask = () => {
        TaskService.createTask(task);
    }

    return (
        <View style={{flex: 1}}>
            <Header />
            <ScrollView style={styles.container}>
                <View style={styles.subhead}>
                    <Text style={styles.subheadText}>Create Task</Text>
                </View>
                <Text style={styles.label}>Title</Text>
                <TextInput value={task.title} style={styles.input} onChangeText={text => handleUpdateTitle(text)}/>
                <Text style={styles.label}>Color</Text>
                <ColorPicker selectedColor={task.color} onChange={handleUpdateColor}/>
                <Text style={styles.label}>Repeat</Text>
                <Dropdown style={styles.input} data={repeatTypes} labelField="label" valueField="value" value={task.repeatType} onChange={repeatType => handleRepeatType(repeatType)}/>
                {task.repeatType === "weekly" && <WeeklyPicker selectedDays={task.weeklySelect} onChange={day => handleWeeklySelect(day)}/>}
                {task.repeatType === "monthly" && <MonthlyPicker selectedDays={task.monthlySelect} onChange={day => handleMonthlySelect(day)}/>}
                <Text style={styles.label}>Preview</Text>
                <Task key={task.id} task={task} handleTaskPress={handleTaskPress}></Task>
                <TouchableWithoutFeedback onPress={() => CreateTask()}>
                    <View style={styles.btn}><Text style={styles.btnText}>Create Task</Text></View>
                </TouchableWithoutFeedback>
                <View style={{marginBottom: 100}}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        padding: 18,
        width: "100%",
        backgroundColor: "#413C58",
        borderRadius: 4
    },
    btnText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderColor: "#413C58",
        borderWidth: 3,
        borderRadius: 8,
        padding: 10,
        fontSize: 18
    },
    label: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 4
    },
    container: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        flex: 1
    },
    subhead: {
        marginTop: 16,
        position: "relative",
        marginBottom: 16
    },
    subheadText: {
        fontSize: 32,
        fontWeight: "bold"
    },
});

export default CreateTask;