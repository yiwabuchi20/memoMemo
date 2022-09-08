import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { string, PropTypes } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

function MemoAppHeader({ title, showBack = false, showLogout = false }) {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  const onPressLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('LogIn');
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftCompontntContainer}>
        {showBack && (
          <TouchableOpacity onPress={onPressBack}>
            <Text style={styles.logout}>＜Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightCompontntContainer}>
        {showLogout && (
          <TouchableOpacity onPress={onPressLogOut}>
            <Text style={styles.logout}>ログアウト</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

MemoAppHeader.propTypes = {
  title: string.isRequired,
  showBack: PropTypes.bool,
  showLogout: PropTypes.bool,
};

MemoAppHeader.defaultProps = {
  showBack: false,
  showLogout: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 96,
    backgroundColor: '#93E5AA',
    alignItems: 'flex-end',
    paddingBottom: 8,
    paddingHorizontal: 8,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  leftCompontntContainer: {
    width: '20%',
  },
  rightCompontntContainer: {
    width: '20%',
    alignItems: 'flex-end',
  },
  logout: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default MemoAppHeader;
