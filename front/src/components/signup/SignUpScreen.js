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


const SignUpScreen = ( {navigation} ) => {

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.cergificationButton} onPress={() => navigation.navigate('signup2')}>
                <Text style={styles.buttonText}>본인 인증하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('first')}>
                <Text style={styles.buttonText2}>뒤로 가기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
    
};
export default SignUpScreen;


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: "75%",
    },
    cergificationButton: {
        backgroundColor: "#9FBCF5",
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
    buttonText2: {
        marginTop: "50%",
        fontSize: 15,
        fontWeight: "600",
        textDecorationLine: "underline"
    },

});