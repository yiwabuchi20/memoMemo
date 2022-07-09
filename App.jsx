import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from 'react';
import MemoAppHeader from './src/components/MemoAppHeader';
import MemoList from './src/components/MemoList';
import PlusButton from './src/components/PlusButton';

export default function App() {
  const DATA = [
    { id: '1', title: 'a', date: '20200101' },
    { id: '2', title: 'b', date: '20200102' },
  ];

  return (
    <>
      <StatusBar />
      <MemoAppHeader title='MemoApp' showLogout showBack />
      <MemoList data={DATA} />
      <PlusButton onPress={() => {}} icon='+' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
