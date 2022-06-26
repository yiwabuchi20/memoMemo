import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, PropTypes } from 'prop-types';

function MemoAppHeader({ title, leftComponent, rightComponent }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftCompontntContainer}>{leftComponent}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightCompontntContainer}>{rightComponent}</View>
    </View>
  );
}

MemoAppHeader.propTypes = {
  title: string.isRequired,
  leftComponent: PropTypes.element,
  rightComponent: PropTypes.element,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    backgroundColor: '#93E5AA',
    alignItems: 'flex-end',
    marginTop: 32,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    justifyContent: 'center',
  },
  leftCompontntContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightCompontntContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default MemoAppHeader;
