import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import MASpacer from './MASpacer';

function MemoContentArea({ data }) {
  return (
    <View style={styles.container}>
      <MASpacer size={30} />
      <Text>{data}</Text>
    </View>
  );
}

MemoContentArea.propTypes = {
  data: PropTypes.string,
};

MemoContentArea.defaultProps = {
  data: '',
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

export default MemoContentArea;
