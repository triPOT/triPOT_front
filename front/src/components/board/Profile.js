import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { heightPercentage, widthPercentage } from '../../customDimensions';

const Profile = ({ profileImage, nickname, name }) => {
  return <View style={styles.container}>
    <Image source={{ uri: profileImage }} style={styles.profileImage} />
    <View style={styles.infoBox}>
      <Text style={styles.badge}>{nickname}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  </View>
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: heightPercentage(9),
  },
  profileImage: {
    width: widthPercentage(42),
    height: heightPercentage(50),
    resizeMode: 'cover',
    borderRadius: 50 / 2,
    marginRight: widthPercentage(8),
  },
  infoBox: {
    justifyContent: 'space-around',
  },
  badge: {
    paddingHorizontal: widthPercentage(8),
    paddingVertical: heightPercentage(2),
    backgroundColor: 'lightblue',
    borderRadius: 4,  // 추후 공용 단위로 변경 필요
    fontSize: 8,      // 추후 공용 단위로 변경 필요
  },
  name: {
    fontSize: 12,     // 추후 공용 단위로 변경 필요
  },
});