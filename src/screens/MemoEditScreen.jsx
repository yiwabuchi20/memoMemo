import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';

export default function MemoEditScreen() {
  const [text, setText] = useState('');
  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" showBack />
      <KeyboardAvoidingView style={styles.container} behavior="height">
        <View style={styles.inputContainer}>
          <TextInput value={text} onChangeText={setText} style={styles.input} multiline />
        </View>
        <CircleButton
          onPress={() => {
            console.log('press');
          }}
          name={'check'}
          style={{ right: 30, bottom: 40 }}
        />
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
