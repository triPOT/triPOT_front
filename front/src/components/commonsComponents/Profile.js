import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {heightPercentage, widthPercentage} from '../../customDimensions';

const Profile = ({profileImage, rank, name}) => {
  const rankProps =
    rank === '숙련된 여행자'
      ? {backgroundColor: 'beige'}
      : rank === '익숙한 여행자'
      ? {backgroundColor: 'lightblue'}
      : {backgroundColor: '#efefef'}; // 초행길 여행자

  return (
    <View style={styles.container}>
      <Image source={{uri: profileImage}} style={styles.profileImage} />
      <View style={styles.infoBox}>
        <Text
          style={[styles.badge, {backgroundColor: rankProps.backgroundColor}]}>
          {rank}
        </Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
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
    borderRadius: widthPercentage(4),
    fontSize: 8, // 추후 공용 단위로 변경 필요
  },
  name: {
    fontSize: 12, // 추후 공용 단위로 변경 필요
  },
});
