/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Category from './src/components/board/Category';
import DatePicker from './src/components/board/DatePicker';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Category />
        <DatePicker />
      </View>
    </SafeAreaView>
  );
};

export default App;