import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {commonStyles} from './common.styles';

const category = [
  {id: 'recruit', name: '#여행팟 구함'},
  {id: 'diary', name: '#여행 일기'},
  {id: 'tips', name: '#여행 꿀팁'},
];

const Category = ({isSelecting, setIsSelecting, now = 'diary'}) => {
  // 현재 선택된 카테고리가 저장된 변수
  const [selected, setSelected] = useState(
    ...category.filter(c => c.id === now),
  );

  return isSelecting ? (
    <View style={[commonStyles.container, commonStyles.layout, {flex: 2}]}>
      {category.map(c => (
        <TouchableOpacity
          key={c.id}
          style={commonStyles.box}
          onPress={() => {
            setSelected(c);
            //onChange(c.id);
            setIsSelecting(false);
          }}>
          <Text
            style={[
              commonStyles.text,
              selected.id === c.id ? {backgroundColor: '#b0cbff'} : null,
            ]}>
            {c.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  ) : (
    <View style={[  commonStyles.container, commonStyles.layout, {flex: 2}]}>
      <TouchableOpacity
        style={commonStyles.box}
        onPress={() => setIsSelecting(true)}>
        <Text style={commonStyles.text}>{selected.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
