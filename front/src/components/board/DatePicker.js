/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View} from 'react-native';
import Calendar from "react-native-calendar-range-picker";
import Modal from '../commonsComponents/Modal';
import CommonTextBtn from '../commonsComponents/CommonTextBtn';
import { commonStyles } from './common.styles';

const today = new Date();
// calendar로부터 받은 `YY-MM-DD` 날짜 포맷을 `MM월 DD일`로 변경
const changeDateFormat = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('ko-kr', { month: 'short', day: 'numeric' }); 
}

const DatePicker = () => {
  // 취소 버튼을 누를 경우, 이전 날짜로 되돌아가기 위한 상태
  const [prevDate, setPrevDate] = useState({startDate: today, endDate: today});
  const [date, setDate] = useState({startDate: today, endDate: today});
  const [showModal, setShowModal] = useState(false);

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  const onCancel = () => {
    setDate(prevDate);
    close();
  };

  const onSave = () => {
    setPrevDate(date);
    close();
  };

  return (
    <View>
      <View style={commonStyles.container}>
        <CommonTextBtn  onPress={open} style={commonStyles.box} textStyle={commonStyles.text} content={`${changeDateFormat(date.startDate)} ~ ${changeDateFormat(date.endDate)}`}/>
      </View>
      <Modal visible={showModal}>
        <View style={{
            width: 270,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',}}>
          <CommonTextBtn onPress={onCancel} textStyle={{color: '#A4C3FF'}} content='취소' />
          <CommonTextBtn onPress={onSave} textStyle={{color: '#A4C3FF'}} content='완료' />
        </View>
        <Calendar
          startDate={today}
          endDate={today}
          onChange={({ startDate, endDate }) => { setDate({ startDate, endDate }); }}
          style={{
            container: { width: '100%', padding: 10, },
            selectedDayBackgroundColor: '#A4C3FF',
            selectedBetweenDayBackgroundTextColor: '#E1EBFF'
          }} />
      </Modal>
    </View>
  );
};

export default DatePicker;
