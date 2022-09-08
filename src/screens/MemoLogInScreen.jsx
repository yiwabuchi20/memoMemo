import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import { shape, func } from 'prop-types';
import Button from '../components/Button';
import MASpacer from '../components/MASpacer';
import MemoAppHeader from '../components/MemoAppHeader';

export default function MemoLogInScreen(props) {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const { navigation } = props;
  const onPressSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(mail, pass)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.navigate('List');
      })
      .catch((error) => {
        Alert.alert(error.code);
      });
  };
  const onPressSignUpText = () => {
    navigation.navigate('SignUp');
  };
  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" />
      <View style={styles.container}>
        <MASpacer size={16} />
        <Text style={styles.title}>Log In</Text>
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
        <Button buttonText="Submit" onPress={onPressSubmit} />
        <MASpacer size={24} />
        <View style={styles.signUpContainer}>
          <Text>Not registerd?</Text>
          <MASpacer holizontal size={8} />
          <TouchableOpacity onPress={onPressSignUpText}>
            <Text style={styles.signUpText}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

MemoLogInScreen.prototype = {
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
