<<<<<<< Updated upstream
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import FirstScreen from './src/components/signup/FirstScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <FirstScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;
=======
import React, { Component } from 'react'
import { Text, StyleSheet, View, Button} from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FirstScreen from './src/components/signup/FirstScreen';
import SignUpScreen from './src/components/signup/SignUpScreen';


const App = createStackNavigator(
  {
    SignUp: {
      screen: SignUpScreen,
    },
    First: {
      screen: FirstScreen,
    },
  },
  {
    initialRouteName: 'First' // 처음 보여 줄 화면을 설정합니다.
  },
);

const AppContainer = createAppContainer(App);

export default () => (
  <AppContainer />
);
>>>>>>> Stashed changes
