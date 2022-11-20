import React, { useState, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const SignUpScreen = ({ navigation }) => {

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

});