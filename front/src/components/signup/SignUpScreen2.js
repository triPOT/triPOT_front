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

const SignUpScreen2 = ( {navigation} ) => {
    const [userId, setUserId] = useState('');
    const [userPasssword, setUserPassword] = useState('');
    const [userPassswordchk, setUserPasswordchk] = useState('');

    return (
        <SafeAreaView style={styles.container}> 
            <Text style={styles.logo}>triPOT</Text>
            <Text style={styles.title}>회원가입</Text>
            <View style={styles.inputform}>
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
                <Text style={styles.text2}>비밀번호 확인</Text>
                <TextInput 
                    style={styles.input2}
                    placeholder={"8자 이상, 영어+숫자"} 
                    maxLength={15}
                    onChangeText={(userPassswordchk) => setUserPasswordchk(userPassswordchk)}
                />
            </View>
            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('signup3')}>
                <Text style={styles.nextbuttontext}>계속하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('signup')}>
                <Text style={styles.buttonText2}>뒤로 가기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default SignUpScreen2;

const styles = StyleSheet.create({
    container: {
        marginTop: "18%",
        alignItems: "center",
    },
    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: 'bold',
        color: '#8BACEB',
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
        fontSize: 16,
        fontWeight: "600",
        marginTop: 30,
        marginRight: 130,
    },
    input: {
        marginTop: 7,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 15,
        borderColor: "#8BACEB",
        width: 200,
        height: 40,
        paddingLeft: 15,
    },
    text2:{
        fontSize: 16,
        fontWeight: "600",
        marginTop: 30,
        marginRight: 100,
    },
    input2: {
        marginTop: 7,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 15,
        borderColor: "#8BACEB",
        width: 200,
        height: 40,
        paddingLeft: 15,
    },
    nextbutton: {
        backgroundColor: "#8BACEB",
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