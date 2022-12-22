import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../components/signup/FirstScreen';
import SignUpScreen from '../components/signup/SignUpScreen';
import SignUpScreen2 from '../components/signup/SignUpScreen2';
import SignUpScreen3 from '../components/signup/SignUpScreen3';
import SignUpScreen4 from '../components/signup/SignUpScreen4';

import SignUpScreen6 from '../components/signup/SignUpScreen6';
import SignUpScreen7 from '../components/signup/SignUpScreen7';

/* ... */

import SignInScreen from '../components/signin/SignInScreen';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="first">
        <Stack.Screen name="first" component={FirstScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="signup2" component={SignUpScreen2} />
        <Stack.Screen name="signup3" component={SignUpScreen3} />
        <Stack.Screen name="signup4" component={SignUpScreen4} />

        <Stack.Screen name="signup6" component={SignUpScreen6} />
        <Stack.Screen name="signup7" component={SignUpScreen7} />

        <Stack.Screen name="signin" component={SignInScreen} />
      </Stack.Navigator>
  );
};

export default StackNavigation;