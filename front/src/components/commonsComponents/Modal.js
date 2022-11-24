import React, {useState} from 'react';
import {Alert, Modal as OriginModal, StyleSheet, View} from 'react-native';

{
  /*
visible: 이 속성값에 따라 모달이 생성됨(required)
transparent: 배경 투명도 설정(default=false)
modalStyle: 최상단 모달의 style 설정 

- 모달의 상태를 저장하는 변수 관리 필요(useState) 
=> ex) const [showModal, setShowModal] = useState(false);

- 모달의 상태를 변경하는 함수 별도 선언하여 사용(선택)
const open = () => setShowModal(true);
const close = () => setShowModal(false);
 

활용 예시
<View>
  <TouchableOpacity onPress={open}><Text>모달 열기</Text></TouchableOpacity>
  <Modal visible={showModal}>
    <View>
      <Text>이것은 모달입니다.</Text>
    </View>
    <TouchableOpacity onPress={close}><Text>닫기</Text></TouchableOpacity>
  </Modal>
</View>
*/
}

const Modal = ({visible, children, modalStyle, transparent = false}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <OriginModal
      animationType="fade"
      transparent={transparent}
      visible={visible}
      style ={[styles.modalStyle, modalStyle]}
      onRequestClose={() => {
        Alert.alert('취소되었습니다.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </OriginModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'row',
  },
  modalView: {
    flex: 1,
    margin: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Modal;
