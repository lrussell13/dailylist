import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TaskList from '../components/TaskList';

function Main(){
    const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;

    return (
        <View>
            <Header />
            <View style={styles.subhead}>
                <Text style={styles.subheadText}>{date}</Text>
                <View style={styles.elipsie}>
                    <View style={[styles.dot]}></View>
                    <View style={[styles.dot]}></View>
                    <View style={[styles.dot]}></View>
                </View>
            </View>
            <View style={styles.container}>
                <TaskList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24
    },
    subhead: {
        marginHorizontal: 24,
        marginTop: 16,
        position: "relative"
    },
    subheadText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    elipsie: {
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: 12,
        right: 12
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 50,
        marginRight: 3,
        backgroundColor: "black"
    },
})

export default Main;