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