import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { string, PropTypes } from 'prop-types';

function MemoListItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.memo}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );
}

MemoListItem.propTypes = {
  item: PropTypes.shape({
    id: string,
    title: string,
    date: string,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    backgroundColor: '#93D0AA',
  },
  memo: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  date: {
    color: '#fff',
    fontSize: 12,
  },
  delete: {
    alignSelf: 'center',
    color: '#999',
  },
});

export default MemoListItem;
