import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 

import StackNavigation from './src/navigations/Stack';


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
  </NavigationContainer>
  );
};

export default App;
