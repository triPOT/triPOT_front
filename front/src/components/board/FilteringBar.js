import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Category from './Category';
import Location from './Location';
import DatePicker from './DatePicker';

const FilteringBar = () => {
  const [isSelecting, setIsSelecting] = useState(false);
  return (
    <View style={{height: 130}}>
      <View style={styles.container}>
        <Category isSelecting={isSelecting} setIsSelecting={setIsSelecting} />
        {!isSelecting && <Location />}
      </View>
      <View style={styles.container}>
        <DatePicker />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default FilteringBar;
