import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Category from './src/components/board/Category';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Category />
      </View>
    </SafeAreaView>
  );
};

export default App;