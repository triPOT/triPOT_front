import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import GrayShadowBox from '../commonsStyles/GrayShadowBox';
import {heightPercentage, widthPercentage} from '../../customDimensions';
import logo from '../../img/logo_top.jpg';

const EdgeLayout = ({children}) => {
  return (
    <View style={styles.layout}>
      <Image source={logo} style={styles.topLogo} />
      <View style={styles.container}>{children}</View>
    </View>
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
    flex: 1,
  },
  container: {
    flex: 1,
    ...GrayShadowBox.grayshadowbox,
    borderRadius: 15, // 추후 공통 단위로 변경 필요
    marginVertical: heightPercentage(30),
    marginHorizontal: widthPercentage(14),
    paddingVertical: heightPercentage(60),
    paddingHorizontal: widthPercentage(20),
    position: 'relative',
  },
});
export default EdgeLayout;
