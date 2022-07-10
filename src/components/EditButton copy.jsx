import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';

function EditButton({ onPress, icon }) {
  return (
    <View style={styles.button} onPress={onPress}>
      <Text style={styles.plus}>{icon}</Text>
    </View>
  );
}

EditButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 1000,
    position: 'absolute',
    right: 30,
    top: 140,
    width: 50,
    height: 50,
    backgroundColor: '#93D0AA',
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

export default EditButton;
