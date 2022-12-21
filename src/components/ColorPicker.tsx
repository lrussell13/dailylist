import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

function ColorPicker(props){
    let colors = ["#413C58", "#8295BF", "#759FBC", "#788BFF", "#BFD7FF", "#5688C7", "#E75A7C", "#D88C9A", "#A67F8E", "#C89FA3", "#99C1B9", "#7FD8BE", "#16302B", "#7DAA92", "#23CE6B", "#FF0000", "#FF8200", "#FFC100"];

    return (
        <View style={styles.container}>
            {colors.map(color => 
                <TouchableWithoutFeedback key={color} onPress={() => props.onChange(color)}>
                    <View style={[styles.colorBlock, {backgroundColor: props.selectedColor === color ? "white": color, borderColor: color}]}>
                    </View>
                </TouchableWithoutFeedback>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
        padding: 4
    },
    colorBlock: {
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 3,
        width: 32,
        height: 32,
        marginRight: 20,
        marginBottom: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ColorPicker;