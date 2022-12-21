import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

function MonthlyPicker(props){
    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    return (
        <View style={styles.container}>
            {days.map(day => 
                <TouchableWithoutFeedback onPress={() => props.onChange(day)}>
                    <View key={day} style={[styles.dayBlock, { backgroundColor: props.selectedDays.includes(day) ? "white" : "#413C58"}]}>
                        <Text style={[styles.text, { color: props.selectedDays.includes(day) ? "#413C58" : "white"}]}>{day}</Text>
                    </View>
                </TouchableWithoutFeedback>)}
            <Text style={styles.smallText}>If month has less days than selected day, task will show on the last day of the month</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold"
    },
    smallText: {
        fontWeight: "500",
        fontSize: 14,
        marginHorizontal: 2,
        marginTop: 8
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 16,
        padding: 4
    },
    dayBlock: {
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "#413C58",
        width: 32,
        height: 32,
        marginBottom: 4,
        marginHorizontal: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MonthlyPicker;