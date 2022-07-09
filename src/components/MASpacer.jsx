import React from 'react';
import { View } from 'react-native';
import { bool, number } from 'prop-types';

function MASpacer({ size, holizontal }) {
  const spacerStyle = holizontal
    ? { height: 0, width: size }
    : { height: size, width: 0 };
  return <View style={spacerStyle} />;
}

MASpacer.propTypes = {
  size: number.isRequired,
  holizontal: bool,
};

MASpacer.defaultProps = {
  holizontal: false,
};
