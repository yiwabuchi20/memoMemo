import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  TextInput, StyleSheet, View, Text, Alert,
} from 'react-native';
import firebase from 'firebase';
import { shape, func } from 'prop-types';
import Button from '../components/Button';
import MASpacer from '../components/MASpacer';
import MemoAppHeader from '../components/MemoAppHeader';
import { translateErrors } from '../utils';

export default function MemoSignUpScreen(props) {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const { navigation } = props;

  const handlePress = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(mail, pass)
      .then(() => {
        navigation.navigate('List');
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  };
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
          onChangeText={setMail}
          placeholder="Email Address"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <MASpacer size={16} />
        <TextInput
          style={styles.input}
          value={pass}
          onChangeText={setPass}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />
        <MASpacer size={16} />
        <Button buttonText="Submit" onPress={handlePress} />
        <MASpacer size={24} />
      </View>
    </>
  );
}

MemoSignUpScreen.prototype = {
  navigation: shape({ navigate: func }),
};

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
