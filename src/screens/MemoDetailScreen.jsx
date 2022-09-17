import { StatusBar } from 'expo-status-bar';
import { shape, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';
import MemoContentArea from '../components/MemoContentArea';
import MemoListItem from '../components/MemoListItem';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState();
  const onPressPencil = () => {
    navigation.navigate('Edit', { id: memo.id, bodyText: memo.bodyText });
  };

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          date: dateToString(data.updatedAt.toDate()),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" showBack />
      {memo && <MemoListItem item={memo} />}
      {memo && <MemoContentArea data={memo.bodyText} />}
      <CircleButton
        onPress={onPressPencil}
        name="pencil"
        style={{ right: 30, top: 135, bottom: 'auto' }}
      />
    </>
  );
}
MemoDetailScreen.prototypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};
