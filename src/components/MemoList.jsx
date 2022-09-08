import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { string, PropTypes } from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function MemoList({ data }) {
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('Detail');
  };
  const renderItem = (info) => {
    const { item } = info;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.memo} onPress={onPressItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Are you sure?');
          }}
          style={styles.delete}
        >
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
    backgroundColor: '#fff',
  },
  memo: {
    flex: 1,
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
    padding: 8,
  },
});

export default MemoList;
