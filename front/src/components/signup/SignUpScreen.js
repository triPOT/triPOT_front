import React, { useState, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from "react-native";
<<<<<<< Updated upstream
import { FirstContext } from "../App";

const SignUpScreen = ({ navigation }) => {

    const { signUp } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>회원가입</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>아이디</Text>
                    <TextInput
                        placeholder="아이디"
                        value={userId}
                        onChangeText={setUserId}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>이름</Text>
                    <TextInput
                        placeholder="이름"
                        value={username}
                        onChangeText={setUsername}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>비밀번호</Text>
                    <TextInput
                        placeholder="비밀번호"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>비밀번호 확인</Text>
                    <TextInput
                        placeholder="비밀번호 확인"
                        value={repassword}
                        onChangeText={setRepassword}
                        secureTextEntry
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            signUp({ userId, username, password, repassword });
                        }}
                    >
                    <Text style={styles.buttonText}>회원가입</Text>
                    </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("Auth")}
                        >
                        <Text style={styles.buttonText}>취소</Text>
                    </TouchableOpacity>
                </View>
            </View>
=======
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const SignUpScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.cergificationButton}>
                <Text style={styles.buttonText}>본인 인증하기</Text>
            </TouchableOpacity>
>>>>>>> Stashed changes
        </SafeAreaView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
<<<<<<< Updated upstream
container: {
flex: 1,
marginLeft: 20,
marginRight: 20,
},
title: {
width: "100%",
height: "15%",
justifyContent: "center",
},
titleText: {
fontSize: 30,
},
form: {
width: "100%",
alignItems: "center",
justifyContent: "center",
},
inputWrapper: {
width: "100%",
paddingBottom: 20,
},
label: {
fontSize: 20,
paddingBottom: 6,
},
textInput: {
width: "100%",
height: 35,
backgroundColor: "#d9d9d9",
borderRadius: 5,
},
buttons: {
width: "100%",
height: 45,
flexDirection: "row",
justifyContent: "space-around",
},
button: {
width: "30%",
borderRadius: 10,
borderWidth: 1,
justifyContent: "center",
alignItems: "center",
},
buttonText: {
fontSize: 20,
},
=======
    container: {
        alignItems: "center",
        marginTop: "90%",
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

>>>>>>> Stashed changes
});