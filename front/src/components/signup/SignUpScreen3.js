// 이용약관 동의

import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    ScrollView,
    Button,
} from "react-native";
import { Checkbox } from "react-native-paper";

const SignUpScreen3 = ({navigation}) => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <Checkbox
                    style={styles.checkbox}
                    status={checked1 ? 'checked' : 'unchecked' }
                    onPress={() => setChecked1(!checked1)}
                />
                <Text style={styles.box1text}>
                    전부 동의합니다.
                </Text>
            </View>
            <View style={styles.box2}>
                <Checkbox
                    style={styles.checkbox}
                    status={checked2 ? 'checked' : 'unchecked' }
                    onPress={() => setChecked2(!checked2)}
                />
                <Text style={styles.box2text}>*triPOT 이용약관에 동의</Text>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.scrolltext}>안녕하세요. 저는 누구누구에요. 만나서 반갑구요. 우리는 이제 뭐를 해야할까요. 저는 조금 있다가 바로 학교에 가야해요. 진짜 학교가기 싫다. 왜 나는 금공강이 아닌 것인가.. 과거의 내가 한탄스럽군.</Text>
                </ScrollView>
            </View>
            <View style={styles.box3}>
                <Checkbox
                    style={styles.checkbox3}
                    status={checked3 ? 'checked' : 'unchecked' }
                    onPress={() => setChecked3(!checked3)}
                />
                <Text style={styles.box3text}>*개인 정보 수집 및 제공 동의</Text>
            </View>
            <TouchableOpacity style={styles.nextbutton} onPress={() => navigation.navigate('signup4')}>
                <Text style={styles.nextbuttontext}>계속하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
export default SignUpScreen3;

const styles = StyleSheet.create({
    container: {
        marginLeft: 50,
    },
    checkbox: {
        color: "#548EFF",
    },
    box1: {
        flexDirection: 'row',
        marginTop: 70,
    },
    box1text: {
        paddingTop: 7,
        paddingLeft: 7,
    },
    box2: {
        flexDirection: 'row',
        marginTop: 60,
    },
    box2text: {
        paddingTop: 7,
        paddingLeft: 7,
    },
    scroll: {
        
    },
    scrolltext: {
        fontSize: 17,
    },
    box3: {
        flexDirection: 'row',
        marginTop: 120,
    },
    box3text: {
        paddingTop: 7,
        paddingLeft: 7,
    },
    nextbutton: {
        marginLeft: 60,
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
});