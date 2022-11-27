import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 

import StackNavigation from './src/navigations/Stack';
import SignUpScreen2 from './src/components/signup/SignUpScreen2';
import SignUpScreen from './src/components/signup/SignUpScreen';
import SignUpScreen3 from './src/components/signup/SignUpScreen3';

const App = () => {
  return (
    <NavigationContainer>
      <SignUpScreen2 />
  </NavigationContainer>
  );
};

export default App;
