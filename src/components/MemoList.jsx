import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { string, PropTypes } from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function MemoList({ data }) {
  const renderItem = (info) => {
    const { item } = info;
    return (
      <View style={styles.container}>
        <View style={styles.memo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.delete}>
          <MaterialCommunityIcons name="close" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    );
  };
  return <FlatList data={data} renderItem={renderItem} keyExtractor={({ id }) => id} />;
}

MemoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: string,
      title: string,
      date: string,
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  memo: {
    justifyContent: 'flex-end',
  },
  title: {
    color: '#666',
    fontSize: 28,
  },
  date: {
    color: '#666',
    fontSize: 14,
  },
  delete: {
    alignSelf: 'center',
  },
});

export default MemoList;
