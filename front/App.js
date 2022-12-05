/* eslint-disable react-native/no-inline-styles */
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import BackBtn from './src/components/commonsComponents/BackBtn';
import GrayShadowBox from './src/components/commonsStyles/GrayShadowBox';
import ProfileEdit from './src/screens/ProfileEdit';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = 'ProfileEdit'
          component = {ProfileEdit}
          options = {{
            headerShown:false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
