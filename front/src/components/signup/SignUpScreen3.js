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
import { RadioButton } from "react-native-paper";

const SignUpScreen3 = () => {
    const [checked, setChecked] = useState(false);
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box1}>
                <RadioButton
                    style={styles.radio}
                    status={checked === 'false' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('true')}
                />
                <Text style={styles.box1text}>
                    전부 동의합니다.
                </Text>
            </View>
            <View style={styles.box2}>
                <RadioButton
                    style={styles.radio}
                    status={checked === 'false' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('true')}
                />
                <Text style={styles.box2text}>*triPOT 이용약관에 동의</Text>
                <ScrollView style={styles.scroll}>
                    <Text style={styles.scrolltext}>안녕하세요. 저는 누구누구에요. 만나서 반갑구요. 우리는 이제 뭐를 해야할까요. 저는 조금 있다가 바로 학교에 가야해요. 진짜 학교가기 싫다. 왜 나는 금공강이 아닌 것인가.. 과거의 내가 한탄스럽군.</Text>
                </ScrollView>
            </View>
            <View style={styles.box3}>
                <RadioButton
                    style={styles.radio}
                    status={checked === 'false' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('true')}
                />
                <Text style={styles.box3text}>*개인 정보 수집 및 제공 동의</Text>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.button2text}>원문 보기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default SignUpScreen3;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    box1: {
        flexDirection: 'row',
        marginTop: 120,
    },
    box1text: {
        paddingTop: 7,
    },
    box2: {
        flexDirection: 'row',
        marginTop: 60,
    },
    box2text: {
        paddingTop: 7,
    },
    scroll: {
        backgroundColor: "blue",
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
    },

});