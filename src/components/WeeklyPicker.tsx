import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

function WeeklyPicker(props){
    let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    return (
        <View style={styles.container}>
            {days.map(day => 
                <TouchableWithoutFeedback key={day} onPress={() => props.onChange(day)}>
                    <View style={[styles.dayBlock, { backgroundColor: props.selectedDays.includes(day) ? "white" : "#413C58"}]}>
                        <Text style={[styles.text, { color: props.selectedDays.includes(day) ? "#413C58" : "white"}]}>{day}</Text>
                    </View>
                </TouchableWithoutFeedback>)}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        padding: 4
    },
    dayBlock: {
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: "#413C58",
        width: 42,
        height: 42,
        marginBottom: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default WeeklyPicker;