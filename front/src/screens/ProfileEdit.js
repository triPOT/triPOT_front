/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import BackBtn from '../components/commons/BackBtn';
import {
  autoSetBorderRadius,
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from '../customDimensions';
import CommonTextBtn from '../components/commonsComponents/CommonTextBtn';
import CommonImgBtn from '../components/commonsComponents/CommonImgBtn';
import GrayShadowBox from '../components/commonsStyles/GrayShadowBox';

const ProfileEdit = ({navigation}) => {
  const [title, setTitle] = useState('홍현지');
  return (
    <SafeAreaView style={{flexDirection:'column', justifyContent:'center'}}>
      <View style={{margin:widthPercentage(15)}}>
        <View
            style={{
            flexDirection: 'row',
            marginStart: widthPercentage(15),
            marginEnd: widthPercentage(11),
            }}>
            <BackBtn
            style={[style.backbtn]}
            onPress={() => {
                navigation.navigate('ProfileEdit');
            }}
            />
            <CommonTextBtn
                style = {[style.EditBtn]}
                txtStyle = {[style.EditTxt]}
            >
                수정
            </CommonTextBtn>
        </View>
        <View>
            <Image style={[style.Img]}/>
            <CommonImgBtn
                style={[style.CameraBtn]},
                imgStyle={[style.Icon]},
                source={'../../img/CameraIcon.png'}
            />
        </View>
        <View style={{width:widthPercentage(328), justifyContent:'flex-start'}}>
            <TextInput
                style={[
                    GrayShadowBox.grayshadowbox, 
                    {
                        marginTop:heightPercentage(25), 
                        paddingStart:widthPercentage(8), 
                        paddingTop:heightPercentage(14), 
                        fontSize:fontPercentage(20), 
                        fontWeight: '600',
                        width: widthPercentage(328),
                        height: heightPercentage(53),
                    }]}
                value={title}
                onChange={(event) => {
                    const{eventCount, target, text}= event.nativeEvent;
                    setName(text);
                }}
            />
            <Text style={[style.text]}>타이틀</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  backbtn: {
    width: widthPercentage(21),
    height: heightPercentage(21),
    marginTop: heightPercentage(19),
  },
  EditBtn: {
    width: widthPercentage(99),
    height: heightPercentage(38),
    borderRadius: autoSetBorderRadius(15),
    marginTop: heightPercentage(11),
    backgroundColor: '#548EFF',
    marginStart: widthPercentage(251),
    alignItems: 'center',
    justifyContent: 'center',
  },
  EditTxt: {
    fontSize: fontPercentage(16),
    fontWeight: '700',
    textAlign: 'center',
  },
  Img: {
    marginTop: heightPercentage(18),
    width: widthPercentage(140),
    height: heightPercentage(140),
    borderRadius: autoSetBorderRadius(70),
    backgroundColor: '#A8C5FF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  CameraBtn:{
    backgroundColor:'white',
    width: widthPercentage(50),
    height: heightPercentage(50),
    borderRadius: autoSetBorderRadius(25),
    position: 'absolute',
    top: heightPercentage(172),
    start: widthPercentage(234),
    bottom: heightPercentage(704),
    end: widthPercentage(144),
    borderColor: '#548EFF',
  },
  Icon:{
    width: widthPercentage(25),
    height: heightPercentage(25),
  },
  text:{
    fontSize:fontPercentage(14),
    fontWeight: '700',
    marginTop: heightPercentage(18),
  },
});

export default ProfileEdit;
