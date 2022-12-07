import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from '../commonsComponents/Modal';
import {commonStyles} from './common.styles';
import CommonTextBtn from '../commonsComponents/CommonTextBtn';

const initialRegions = [
  {
    id: 'now',
    name: '현재위치',
    checked: false,
  },
  {
    id: 'seoul',
    name: '서울',
    checked: false,
  },
  {
    id: 'gyeonggi',
    name: '경기',
    checked: false,
  },
  {
    id: 'incheon',
    name: '인천',
    checked: false,
  },
  {
    id: 'gangwon',
    name: '강원',
    checked: false,
  },
  {
    id: 'daejeon',
    name: '대전',
    checked: false,
  },
  {
    id: 'chungbuk',
    name: '충북',
    checked: false,
  },
  {
    id: 'chungnam',
    name: '충남',
    checked: false,
  },
  {
    id: 'busan',
    name: '부산',
    checked: false,
  },
  {
    id: 'ulsan',
    name: '울산',
    checked: false,
  },
  {
    id: 'daegu',
    name: '대구',
    checked: false,
  },
  {
    id: 'gyeongbuk',
    name: '경북',
    checked: false,
  },
  {
    id: 'gyeongnam',
    name: '경남',
    checked: false,
  },
  {
    id: 'gwangju',
    name: '광주',
    checked: false,
  },
  {
    id: 'jeonbuk',
    name: '전북',
    checked: false,
  },
  {
    id: 'jeonnam',
    name: '전남',
    checked: false,
  },
  {
    id: 'jeju',
    name: '제주',
    checked: false,
  },
];

const Location = () => {
  const [showModal, setShowModal] = useState(false);
  const [regions, setRegions] = useState(initialRegions);
  const [selected, setSelected] = useState([]);

  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  const onToggle = id => {
    setRegions(
      regions.map(r => (r.id === id ? {...r, checked: !r.checked} : r)),
    );
  };

  const onSave = () => {
    setSelected(regions.filter(r => r.checked));
    console.log(selected);
    close();
  };

  return (
    <View style={commonStyles.layout}>
      <Modal visible={showModal} close={close}>
        <View
          style={{
            width: 270,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CommonTextBtn onPress={close} textStyle={{color: '#A4C3FF'}}>
            취소
          </CommonTextBtn>
          <CommonTextBtn onPress={onSave} textStyle={{color: '#A4C3FF'}}>
            완료
          </CommonTextBtn>
        </View>
        <View style={styles.container}>
          {regions.map(r => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                r.checked ? styles.selectedContainer : null,
              ]}
              key={r.id}
              onPress={() => onToggle(r.id)}>
              <Text>{r.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <View
        style={[
          commonStyles.container,
          commonStyles.layout,
          {marginVertical: 0, paddingVertical: 0}
        ]}>
        <TouchableOpacity style={commonStyles.box} onPress={open}>
          {selected.length === 0 ? (
            <Text style={commonStyles.text}>위치</Text>
          ) : selected.length === 1 ? (
            <Text style={commonStyles.text}> {selected[0].name}</Text>
          ) : (
            <Text style={commonStyles.text}>
              {selected[0].name}외 {selected.length - 1}곳
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  itemContainer: {
    width: 80,
    height: 50,
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#A4C3FF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedContainer: {
    backgroundColor: '#A4C3FF',
  },
});
