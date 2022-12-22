// 마지막 화면

import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    SafeAreaView,
    Button,
} from "react-native";


const SignUpScreen7 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.notice1}>
                고생하셨습니다!
            </Text>
            <Text style={styles.text1}>
                저희 triPOT은 
            </Text>
            <Text style={styles.text2}>
                여러분의 회원가입을 진심으로 환영하며,
            </Text>
            <Text style={styles.text3}>
                여러분의 즐거운 팟을 응원합니다.
            </Text>
            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('first')}>
                <Text style={styles.nextbuttontext}>triPOT 시작하기</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}
export default SignUpScreen7;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    notice1: {
        fontSize: 15,
        marginTop: 80,
        color: "black",
    },
    text1: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 150,
        marginBottom: 10,
    },
    text2: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    text3: {
        fontSize: 14,
        fontWeight: "600",
    },
    input: {
        marginTop: 7,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 15,
        borderColor: "#548EFF",
        width: 200,
        height: 40,
        paddingLeft: 15,
    },
    hiddentext: {
        fontSize: 10,
        marginTop: 7,
    },
    nextbutton: {
        backgroundColor: "#548EFF",
        color: "white",
        width: 200,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 150,
        height: 40,
        shadowColor: "gray",
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 5
        },
    },
    nextbuttontext: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    }
})