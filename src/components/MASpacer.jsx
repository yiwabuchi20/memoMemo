import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape, PropTypes, number } from 'prop-types';

function MASpacer({ size, holizontal = false }) {
  const spacerStyle = holizontal
    ? { height: 0, width: size }
    : { height: size, width: 0 };
  return <View style={spacerStyle} />;
}

MASpacer.propTypes = {
  size: number.isRequired,
  holizontal: bool,
};

export default MASpacer;
