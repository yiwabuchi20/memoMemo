import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import MASpacer from './MASpacer';

function MemoContentArea({ data }) {
  return (
    <ScrollView style={styles.container}>
      <MASpacer size={30} />
      <View style={styles.memoBody}>
        <Text>{data}</Text>
      </View>
    </ScrollView>
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
    paddingHorizontal: 24,
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  memoBody: {
    paddingBottom: 80,
  },
});

export default MemoContentArea;
