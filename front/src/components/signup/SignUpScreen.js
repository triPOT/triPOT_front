// 회원가입 - 본인인증

import React, { useState, useContext, Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const SignUpScreen = () => {

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.cergificationButton}>
                <Text style={styles.buttonText}>본인 인증하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
    
};
export default SignUpScreen;


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: "80%",
    },
    cergificationButton: {
        backgroundColor: "#548EFF",
        width: "45%",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        alignItems: "center",
        shadowColor: "gray",
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 5
        },
    },
    buttonText: {
        fontSize: 17,
        fontWeight: "600",
        color: "white",
    },

});