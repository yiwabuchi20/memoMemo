import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';
import MemoList from '../components/MemoList';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const onPressPlus = () => {
    navigation.navigate('Edit');
  };
  const DATA = [
    { id: '1', title: 'a', date: '20200101' },
    { id: '2', title: 'b', date: '20200102' },
  ];
  return (
    <>
      <StatusBar />
      <MemoAppHeader title="MemoApp" showLogout />
      <View style={styles.container}>
        <MemoList data={DATA} />
        <TouchableOpacity onPress={onPressPlus}>
          <CircleButton onPress={onPressPlus} name="plus" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9FBE9',
  },
});
