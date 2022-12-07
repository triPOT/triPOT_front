/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Tabs from './src/components/BottomBar';
import BackBtn from './src/components/commonsComponents/BackBtn';
import GrayShadowBox from './src/components/commonsStyles/GrayShadowBox';
import { autoSetBorderRadius } from './src/customDimensions';
import HomePage from './src/screens/HomePage';

const App = () => {
  return (
    <SafeAreaView>
      <View style={[GrayShadowBox.grayshadowbox, {margin: 15, width: '100%', borderRadius:autoSetBorderRadius(15)}]}>
        <Text style={{margin: 20}}>HI</Text>
        <BackBtn
          style={{margin:10, width:15, height:15}}
        />
      </View>
      <Tabs/>
    </SafeAreaView>
  );
};

export default App;
