import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './src/components/signup/FirstScreen';
import SignUpScreen from './src/components/signup/SignUpScreen';
import SignUpScreen2 from './SignUpScreen2';
import SignUpScreen3 from './SignUpScreen3';

const Stack = createStackNavigator();

const FirstStack = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="signup2" component={SignUpScreen2} />
    </Stack.Navigator>
  );
};

export default FirstStack;