import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './src/components/signup/FirstScreen';
import SignUpScreen from './src/components/signup/SignUpScreen';

const Stack = createStackNavigator();

const FirstStack = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default FirstStack;