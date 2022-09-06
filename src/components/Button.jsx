import { string } from 'prop-types';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Button(props) {
  const { buttonText } = props;
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  );
}

Button.propTypes = {
  buttonText: string.isRequired,
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
