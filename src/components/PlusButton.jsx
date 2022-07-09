import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';

function PlusButton({ onPress }) {
  return (
    <View style={styles.button} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </View>
  );
}

PlusButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 1000,
    position: 'absolute',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    backgroundColor: '#93E5AA',
    // shadowColor: '#000',
    // shadowOffset: { width: 10, height: 18 },
    // shadowOpacity: 0.75,
    // shadowRadius: 8,
    elevation: 8,
  },
  plus: {
    position: 'relative',
    alignSelf: 'center',
    top: 2,
    justifyContent: 'center',
    color: '#fff',
    fontSize: 30,
  },
});

export default PlusButton;
