// 이메일 등록 페이지

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


const SignUpScreen6 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.notice}>
                아이디와 비밀번호 분실 시 사용할 이메일을 입력하세요!
            </Text>
            <Text style={styles.text}>
                이메일
            </Text>
            <TextInput 
                style={styles.input}
            />
            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('signup7')}>
                <Text style={styles.nextbuttontext}>저장하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default SignUpScreen6;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    notice: {
        fontSize: 14,
        marginTop: 80,
        color: "black",
    },
    text: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 170,
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