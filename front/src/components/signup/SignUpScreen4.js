// 프로필 사진, 별명 설정

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


const SignUpScreen4 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.notice1}>
                여러분만의 프로필을 완성하세요!
            </Text>
            <Text style={styles.notice2}>
                완성된 프로필은 다른 사용자들에게 보여집니다.
            </Text>
            <Text style={styles.text}>
                별칭
            </Text>
            <TextInput 
                style={styles.input}
            />
            <Text style={styles.text}>
                여행 스타일
            </Text>
            <TextInput 
                style={styles.input}
            />
            <Text style={styles.text}>
                사는 곳
            </Text>
            <TextInput 
                style={styles.input}
            />
            <Text style={styles.hiddentext}>
                * 사는 곳은 다른 사람에게 보이지 않아요!
            </Text>
            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('signup6')}>
                <Text style={styles.nextbuttontext}>계속하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('signup3')}>
                <Text style={styles.buttonText2}>뒤로 가기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default SignUpScreen4;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    notice1: {
        fontSize: 14,
        marginTop: 80,
    },
    notice2: {
        fontSize: 14,
        marginTop: 5,
    },
    text: {
        fontSize: 14,
        fontWeight: "600",
        marginTop: 30,
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
        color: "#FF0099",
    },
    nextbutton: {
        backgroundColor: "#548EFF",
        color: "white",
        width: 200,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 50,
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
    },
    buttonText2: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: "600",
        textDecorationLine: "underline"
    },
})