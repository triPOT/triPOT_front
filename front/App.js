/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import GrayShadowBox from './src/components/commonsStyles/GrayShadowBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={[GrayShadowBox.grayshadowbox, {margin: 15, width: '100%'}]}>
        <Text style={{margin: 20}}>HI</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
