/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { MaterialDatetimePickerAndroid, AndroidDatePickerType, AndroidDateInputMode } from 'react-native-material-datetime-picker';
import { commonStyles } from './common.styles';

const DatePicker = () => {
  const [today, setToday] = useState(new Date()); // 초기값
  const [dates, setDates] = useState({ startDate: null, endDate: null });


  const showDatePicker = () => {
    MaterialDatetimePickerAndroid.show({
      value: today,
      titleText: 'Select date',
      inputMode: AndroidDateInputMode.CALENDAR,
      type: AndroidDatePickerType.RANGE,
      fullscreen: false,
      positiveButtonText: '확인',
      onConfirmDateRange: (startDate, endDate) => { setDates({startDate, endDate}); },
    });
  };


  return (
    <View style={commonStyles.container}>
      <TouchableOpacity style={commonStyles.box}  onPress={showDatePicker}>
        <Text style={commonStyles.text}>{dates.startDate && dates.startDate.toLocaleDateString('ko-kr', { month: 'narrow', day: 'numeric' })}
        &nbsp;/&nbsp;{dates.endDate && dates.endDate.toLocaleDateString('ko-kr', { month: 'short', day: 'numeric' })}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
