import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase';
import { shape, string } from 'prop-types';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [editText, setEditText] = useState(bodyText);
  const onPressCheck = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref
        .set(
          {
            bodyText: editText,
            updatedAt: new Date(),
          },
          // 更新したくないキーが存在する場合に設定する（今回は不要）
          { merge: true }
        )
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  };
  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" showBack />
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.inputContainer}>
          <TextInput
            value={editText}
            onChangeText={setEditText}
            style={styles.input}
            multiline
            autoFocus
          />
        </View>
        <CircleButton onPress={onPressCheck} name="check" style={{ right: 30, bottom: 40 }} />
      </KeyboardAvoidingView>
    </>
  );
}

MemoEditScreen.prototypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingBottom: 80,
    flex: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 32,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
