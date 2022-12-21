import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

function Header(){
    return (
        <View style={styles.header}>
            <Text>Logo here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#413C58",
        minHeight: 100,
        paddingTop: 50,
        paddingHorizontal: 18
    }
})

export default Header;