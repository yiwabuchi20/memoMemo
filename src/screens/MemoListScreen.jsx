import { StatusBar } from 'expo-status-bar';
import React from 'react';
import CircleButton from '../components/CircleButton';
import MemoAppHeader from '../components/MemoAppHeader';
import MemoList from '../components/MemoList';

export default function MemoListScreen() {
  const DATA = [
    { id: '1', title: 'a', date: '20200101' },
    { id: '2', title: 'b', date: '20200102' },
  ];
  return (
    <>
      <StatusBar />
      <MemoAppHeader title='MemoApp' showLogout />
      <MemoList data={DATA} />
      <CircleButton onPress={() => {}} name='plus' />
    </>
  );
}
