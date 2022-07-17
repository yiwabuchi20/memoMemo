import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import { Feather } from '@expo/vector-icons'; 


function CircleButton({ onPress, icon, style }) {
  return (
    <View style={[styles.button, style]} onPress={onPress}>
      <Feather style={styles.plus} name="plus" size={24} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape,
};

CircleButton.defaultProps = {
  style: null,
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
    flex:1,
    // shadowColor: '#000',
    // shadowOffset: { width: 10, height: 18 },
    // shadowOpacity: 0.75,
    // shadowRadius: 8,
    elevation: 8,
  },
  plus: {
    position:"relative",
    alignSelf: 'center',
    // justifyContent:"center",
    top:8,
    fontSize: 30,
  },
});

export default CircleButton;
