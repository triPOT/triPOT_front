/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import BoardMain from './src/components/board/BoardMain';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BoardMain />
    </SafeAreaView>
  );
};

export default App;