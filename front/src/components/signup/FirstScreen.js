import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

const FirstScreen = ({ navigation }) => {
    function onSignIn() {
        navigation.navigate("SignIn");
    }
    function onSignUp() {
        navigation.navigate("SignUp")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Example style={{borderRadius: 100}}>
                <CenteredText>
                    P!
                </CenteredText>
            </Example>
            <View style={styles.titleWrapper}>
                <Text style={styles.title2}>triPOT</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.signUpButton} onPress={onSignUp}>
                    <Text style={styles.signUpButtonText}>여행 시작하기</Text>
                </TouchableOpacity>
                <View style={styles.text}>
                    <Text style={styles.p}>이미 계정이 있다면</Text>
                    <TouchableOpacity style={styles.signInButton} onPress={onSignIn}>
                        <Text style={styles.signInButtonText}>로그인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default FirstScreen;

const Example = (props) => (
    <View style={[styles.example, props.style]}>
      {props.children}
    </View>
);
  
const CenteredText = (props) =>(
    <Text style={[styles.centeredText, props.style]}>
      {props.children}
    </Text>
);
  

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    example:{
        width: 150,
        height: 150,
        marginTop: "40%",
        backgroundColor: "#548EFF",
        justifyContent: 'center'
    },
    centeredText:{
        textAlign: 'center',
        fontSize: 60,
        fontStyle: "italic",
        fontWeight: 'bold',
        color: 'white',
    },
    titleWrapper: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonWrapper: {
        width: "100%",
        height: "45%",
        alignItems: "center",
    },
    title2: {
        fontSize: 40,
        fontStyle: "italic",
        fontWeight: "700",
        color: "#548EFF",
        paddingTop: 20,
    },
    signUpButton: {
        backgroundColor: "#548EFF",
        width: "55%",
        alignItems: "center",
        borderRadius: 15,
        padding: 10,
        marginTop: "30%",
    },
    signUpButtonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        paddingTop: 3,
        paddingBottom: 3,
    },
    text: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
    },
    p: {
        marginRight: 10,
    },
    signInButtonText: {
        marginTop: 1,
        color: "#548EFF",
        fontSize: 15,
        fontWeight: "600",
        textDecorationLine: "underline"
    },

})