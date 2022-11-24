import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import GrayShadowBox from '../commonsStyles/GrayShadowBox';
import logo from '../../img/logo_top.jpg';

const EdgeLayout = ({children}) => {
  return (
    <View style={styles.layout}>
      <Image source={logo} style={styles.topLogo} />
      <View style={styles.container}>{children}</View>
    </View>
  );
};

// 아래는 피그마에 있는 픽셀의 단위를 그대로 가져왔으므로,
// 추후에 공통 단위로 변경 필수
const styles = StyleSheet.create({
  topLogo: {
    width: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    top: -35,
  },
  layout: {
    padding: 14,
    paddingTop: 30,
  },
  container: {
    ...GrayShadowBox.grayshadowbox,
    height: 865,
    borderRadius: 15,
    padding: 23,
    position: 'relative',
  },
});
export default EdgeLayout;
