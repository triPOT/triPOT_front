import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const category = [
  {id: 'recruit', name: '#여행팟 구함'},
  {id: 'diary', name: '#여행 일기'},
  {id: 'tips', name: '#여행 꿀팁'},
];

const Category = ({now = 'diary', onChange}) => {
  // 현재 선택된 카테고리가 저장된 변수
  const [selected, setSelected] = useState(
    ...category.filter(c => c.id === now),
  );
  // 카테고리 메뉴 확장 유무 결정 boolean
  const [isSelecting, setIsSeleting] = useState(false);

  return isSelecting ? (
    <View style={styles.container}>
      {category.map(c => (
        <TouchableOpacity
          key={c.id}
          style={styles.category}
          onPress={() => {
            setSelected(c);
            //onChange(c.id);
            setIsSeleting(false);
          }}>
          <Text
            style={[
              styles.text,
              selected.id === c.id ? {backgroundColor: '#b0cbff'} : null,
            ]}>
            {c.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.category}
        onPress={() => setIsSeleting(!isSelecting)}>
        <Text style={styles.text}>{selected.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#548EFF',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.57,
    shadowRadius: 9.51,

    elevation: 15,
  },
  category: {
    flex: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    padding: 5,
    borderWidth: 0,
    borderRadius: 10,
    color: 'black',
  },
});

export default Category;
