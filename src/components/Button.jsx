import { string, func } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button(props) {
  const { buttonText, onPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  buttonText: string.isRequired,
  onPress: func.isRequired,
};

const styles = StyleSheet.create({
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
});
