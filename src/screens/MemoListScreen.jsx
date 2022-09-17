import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity, View, StyleSheet, Alert, Text,
} from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';
import MemoList from '../components/MemoList';
import { dateToString } from '../utils';
import Button from '../components/Button';
import MASpacer from '../components/MASpacer';
import Loading from '../components/Loading';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const onPressPlus = () => {
    navigation.navigate('Create');
  };

  const onPressCreate = () => {
    navigation.navigate('Create');
  };

  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      setIsLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              title: data.bodyText,
              date: dateToString(data.updatedAt.toDate()),
            });
          });
          setMemos(userMemos);
          setIsLoading(false);
        },
        () => {
          setIsLoading(false);
          Alert.alert('データの取得に失敗しました');
        },
      );
    }
    return unsubscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <>
        <MemoAppHeader title="MemoApp" showLogout />
        <View style={emptyStyles.container}>
          <Loading isLoading={isLoading} />
          <View style={emptyStyles.inner}>
            <Text style={emptyStyles.title}>最初のメモを作成しよう！</Text>
            <MASpacer size={32} />
            <Button buttonText="作成する" onPress={onPressCreate} />
          </View>
        </View>
      </>
    );
  }

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

const emptyStyles = StyleSheet.create({
  container: {
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
});
