import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import MASpacer from '../components/MASpacer';
import MemoAppHeader from '../components/MemoAppHeader';

export default function MemoSignUpScreen() {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" showBack />
      <View style={styles.container}>
        <MASpacer size={16} />
        <Text style={styles.title}>Sign Up</Text>
        <MASpacer size={16} />
        <TextInput
          style={styles.input}
          value={mail}
          onChange={setMail}
          placeholder="Email Address"
        />
        <MASpacer size={16} />
        <TextInput style={styles.input} value={pass} onChange={setPass} placeholder="Password" />
        <MASpacer size={16} />
        <Button buttonText="Submit" onPress={() => {}} />
        <MASpacer size={24} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#E9FBE9',
  },
  title: {
    fontSize: 20,
  },
  input: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#8D8D8D',
    backgroundColor: '#fff',
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 6,
    backgroundColor: '#93E5AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  signUpText: {
    color: '#298EEB',
  },
});
