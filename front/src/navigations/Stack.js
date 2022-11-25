import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../components/signup/FirstScreen';
import SignUpScreen from '../components/signup/SignUpScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="first">
        <Stack.Screen name="first" component={FirstScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        
      </Stack.Navigator>
  );
};

export default StackNavigation;