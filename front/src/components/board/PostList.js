import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, Image, Text, FlatList, StyleSheet} from 'react-native';
import Profile from './Profile';
import { widthPercentage, heightPercentage } from '../../customDimensions';
import {testPosts} from './testData';

const PostItem = React.memo(({ user, content }) => {
  console.log(content.image.length);
  
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
        <Profile {...user}/>
      </TouchableOpacity>
      {content.image.length > 0 && <Image source={{ uri: content.image }} style={styles.thumbnail} />}
      <Text style={styles.text}>{content.post}</Text>
      <View style={styles.buttonSet}>
        <TouchableOpacity style={styles.button}><Text>1:1 채팅</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>댓글</Text></TouchableOpacity>
      </View>
    </View>
  );
});


// PostList의 FlatList에 사용되는 속성들
const renderItem = ({ item }) => {
  return <PostItem user={item.user} content={item.content} onPress={() => console.log(item.id)} />;
};

const PostList = () => {
  const [posts, setPosts] = useState(testPosts); // 추후 axios를 통한 api 통신 구현 예정

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => (item.id).toString()}
        contentContainerStyle={{margin: 'auto'}}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center' }}>
            <Text>아직 등록된 게시글이 없습니다.</Text>
          </View>)}
      />
      </SafeAreaView>
  );
};

export default PostList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    paddingHorizontal: widthPercentage(10),
    paddingVertical: heightPercentage(9),
    borderTopWidth: widthPercentage(1),
    borderTopColor: '#D2D2D2'
  },
  thumbnail: {
    alignSelf: 'center',
    width: '100%',
    height: heightPercentage(276),
    resizeMode: 'contain',
  },
  text: {
    marginVertical: heightPercentage(17),
  },
  buttonSet: {
    flexDirection: 'row',
    marginTop: heightPercentage(5),
    marginBottom: heightPercentage(5),
    paddingTop: heightPercentage(5),
    paddingBottom: heightPercentage(5),
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});