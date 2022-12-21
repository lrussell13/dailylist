import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function Task(props: any){
    const checkmarkBgColor = props.task.isDoneToday ? props.task.color : "white" 

    return (
        <TouchableWithoutFeedback onPress={e => props.handleTaskPress(e, props.task.id)} style={{width: "100%"}}>
            <View style={[styles.taskCard, { borderColor: props.task.color }]}>
                {props.task.isDoneToday && <View style={[styles.overlay, { backgroundColor: props.task.color, opacity: 0.3 }]}></View>}
                <View style={[styles.checkBox, { borderColor: props.task.color, backgroundColor: checkmarkBgColor }]}>
                    {props.task.isDoneToday && <Text><FontAwesomeIcon icon="check" style={ styles.checkMark } size={ 42 }></FontAwesomeIcon></Text>}
                </View>
                <View style={{ flexDirection: 'column', flexShrink: 1 }}>
                    <Text style={[styles.title, { color: props.task.color}]}>{props.task.title}</Text>
                    <Text style={[styles.subtitle, { color: props.task.color}]}>Streak: {props.task.streak}</Text>
                </View>
                <View style={styles.elipsie}>
                    <View style={[styles.dot, {backgroundColor: props.task.color}]}></View>
                    <View style={[styles.dot, {backgroundColor: props.task.color}]}></View>
                    <View style={[styles.dot, {backgroundColor: props.task.color}]}></View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        position: "absolute",
        zIndex: 1,
    },
    checkMark: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 8
    },
    elipsie: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 16,
        right: 16
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 50,
        marginRight: 3
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        flexWrap: "wrap",
        flexShrink: 1
    },
    subtitle: {
        fontWeight: "bold"
    },
    taskCard: {
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 3,
        marginBottom: 12,
        padding: 16,
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        position: "relative",
    },
    checkBox: {
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 3,
        width: 48,
        height: 48,
        marginRight: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Task;