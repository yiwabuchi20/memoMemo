import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MemoAppHeader from '../components/MemoAppHeader';
import MemoList from '../components/MemoList';
import PlusButton from '../components/PlusButton';

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
      <PlusButton onPress={() => {}} icon='+' />
    </>
  );
}
