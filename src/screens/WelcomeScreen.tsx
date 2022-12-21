import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import UserService from '../services/UserService';

function WelcomeScreen() {
    const signInUser = async () => {
        const data = await UserService.signInWithEmail('lancebryanrussell@gmail.com', 'Minimoon1367!');
        console.log(data);
    }

    const registerUser = async () => {
        const data = await UserService.signUpWithEmail('lancebryanrussell@gmail.com', 'Minimoon1367!', 'Lance');
        console.log(data);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Text>Logo goes here</Text>
            </View>
            <View style={styles.bottonBtnContainer}>
                <TouchableWithoutFeedback onPress={() => registerUser()}>
                    <View style={styles.registerBtn}>
                        <Text style={styles.btnText}>Register</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => signInUser()}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.btnText}>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    btnText: {
        color: "white",
        fontSize: 28,
    },
    logoContainer: {
        position: 'absolute',
        top: "50%",
        left: "39%"
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',   
        alignItems: 'center',
        position: 'relative'
    },
    loginBtn: {
        backgroundColor: "#413C58",
        color: "#fff",
        width: "100%",
        padding: 12,
        textAlign: 'center',
        alignItems: 'center',
    },
    registerBtn: {
        backgroundColor: "#8295BF",
        width: "100%",
        padding: 12,
        textAlign: 'center',
        alignItems: 'center',
    },
    bottonBtnContainer: {
        width: "100%"
    }
})

export default WelcomeScreen;