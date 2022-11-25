// 회원가입 - 아이디, 비번

import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    Button,
} from "react-native";

const SignUpScreen2 = () => {
    const [userId, setUserId] = useState('');
    const [userPasssword, setUserPassword] = useState('');
    const [userPassswordchk, setUserPasswordchk] = useState('');

    return (
        <SafeAreaView style={styles.container}> 
            <Text style={styles.logo}>triPOT</Text>
            <Text style={styles.title}>회원가입</Text>
            <View style={styles.inputform}>
                <Text style={styles.text}>아이디</Text>
                <TextInput 
                    style={styles.input}
                    placeholder={"5자 이상"} 
                    onChangeText={(userId) => setUserId(userId)}
                />
                <Text style={styles.text}>비밀번호</Text>
                <TextInput 
                    style={styles.input}
                    placeholder={"8자 이상, 영어+숫자"} 
                    onChangeText={(userPasssword) => setUserPassword(userPasssword)}
                />
                <Text style={styles.text2}>비밀번호 확인</Text>
                <TextInput 
                    style={styles.input2}
                    placeholder={"8자 이상, 영어+숫자"} 
                    onChangeText={(userPassswordchk) => setUserPasswordchk(userPassswordchk)}
                />
            </View>
            <TouchableOpacity style={styles.nextbutton}>
                <Text style={styles.nextbuttontext}>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default SignUpScreen2;

const styles = StyleSheet.create({
    container: {
        marginTop: "20%",
        alignItems: "center",
    },
    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: 'bold',
        color: '#548EFF',
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
        color: "#000000",
    },
    inputform: {
        alignItems: "center",
    },
    text:{
        color: "#000000",
        fontSize: 16,
        fontWeight: "600",
        marginTop: 40,
        marginRight: 130,
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
    text2:{
        color: "#000000",
        fontSize: 16,
        fontWeight: "600",
        marginTop: 20,
        marginRight: 100,
    },
    input2: {
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
    }
})