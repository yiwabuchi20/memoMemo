import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';

export default function MemoCreateScreen(props) {
  const [bodyText, setBodyText] = useState('');
  const { navigation } = props;
  const onPressCheck = () => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref
      .add({
        bodyText,
        updatedAt: new Date(),
      })
      .then((docRef) => {
        console.log('created', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" showBack />
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.inputContainer}>
          <TextInput
            value={bodyText}
            onChangeText={setBodyText}
            style={styles.input}
            multiline
            autoFocus
          />
        </View>
        <CircleButton onPress={onPressCheck} name={'check'} style={{ right: 30, bottom: 40 }} />
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
