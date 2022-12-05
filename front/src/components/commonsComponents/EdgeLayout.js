import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import GrayShadowBox from '../commonsStyles/GrayShadowBox';
import { heightPercentage, widthPercentage, autoSetBorderRadius } from '../../customDimensions';
import logo from '../../img/logo_top.jpg';

const EdgeLayout = ({children}) => {
  return (
    <SafeAreaView>
      <View style={styles.layout}>
        <Image source={logo} style={styles.topLogo} />
        <View style={styles.container}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topLogo: {
    width: widthPercentage(80),
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    top: widthPercentage(-45),
  },
  layout: {
    paddingVertical: heightPercentage(14),
    paddingHorizontal: heightPercentage(14),
    paddingTop: heightPercentage(30),
  },
  container: {
    ...GrayShadowBox.grayshadowbox,
    height: heightPercentage(865),
    borderRadius: 15, // 추후 공통 단위로 변경 필요
    paddingVertical: heightPercentage(23),
    paddingHorizontal: widthPercentage(23),
    paddingTop: heightPercentage(60),
    position: 'relative',
  },
});
export default EdgeLayout;
