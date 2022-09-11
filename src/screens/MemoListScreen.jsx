import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';
import MemoList from '../components/MemoList';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const onPressPlus = () => {
    navigation.navigate('Edit');
  };
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (unsubscribe) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              title: data.bodyText,
              date: data.updatedAt.toDate().toLocaleString(),
            });
          });
          setMemos(userMemos);
        },
        (error) => {
          console.log(error);
          Alert.alert('データの取得に失敗しました');
        }
      );
    }
    return unsubscribe;
  }, []);

  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" showLogout />
      <View style={styles.container}>
        <MemoList data={memos} />
        <TouchableOpacity onPress={onPressPlus}>
          <CircleButton onPress={onPressPlus} name="plus" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9FBE9',
  },
});
