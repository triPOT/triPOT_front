import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import BackBtn from '../components/commons/BackBtn';

const ProfileEdit = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style={{flexDirection: "row", marginStart: 15, marginEnd:11}}>
                <BackBtn
                    style={[
                        
                    ]}
                />
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    backbtn:{
        marginEnd: 251,
        marginTop:19
    }
})