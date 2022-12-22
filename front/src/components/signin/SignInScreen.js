// 앱 처음 화면 - 회원가입이나 로그인

import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Button,
    TextInput,
} from "react-native";

const SignInScreen = ( {navigation} ) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title1}>로그인</Text>
            </View>
            <View style={styles.contentWrapper}>
                <Text style={styles.text}>닉네임</Text>
                <TextInput 
                    style={styles.input}
                    maxLength={8}
                    onChangeText={(userId) => setUserId(userId)}
                />
                <Text style={styles.text}>비밀번호</Text>
                <TextInput 
                    style={styles.input}
                    placeholder={"8자 이상, 영어+숫자"} 
                    maxLength={15}
                    onChangeText={(userPasssword) => setUserPassword(userPasssword)}
                />
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('signup')}>
                    <Text style={styles.signInButtonText}>triPOT 시작하기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default SignInScreen;

  

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    titleWrapper: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
    },
    buttonWrapper: {
        width: "100%",
        height: "45%",
        alignItems: "center",
    },
    title1: {
        fontSize: 25,
        fontWeight: "700",
        color: "black",
        paddingTop: 20,
    },
    contentWrapper: {
        marginTop: 50,
    },
    text: {
        marginLeft: 12,
        marginTop: 20,
        fontSize: 15,
        fontWeight: "600"
    },
    input: {
        marginTop: 7,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 15,
        borderColor: "#7CA4F0",
        width: 200,
        height: 40,
        paddingLeft: 15,
    },
    signInButton: {
        backgroundColor: "#7CA4F0",
        color: "white",
        width: "55%",
        alignItems: "center",
        borderRadius: 15,
        padding: 10,
        marginTop: "20%",
    },
    signInButtonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "600",
    },
 

})