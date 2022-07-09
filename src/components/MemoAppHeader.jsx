import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, PropTypes } from 'prop-types';

function MemoAppHeader({ title, showBack = false, showLogout = false }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftCompontntContainer}>
        {showBack && <Text style={styles.logout}>＜Back</Text>}
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightCompontntContainer}>
        {showLogout && <Text style={styles.logout}>ログアウト</Text>}
      </View>
    </View>
  );
}

MemoAppHeader.propTypes = {
  title: string.isRequired,
  showBack: PropTypes.bool,
  showLogout: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 104,
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
    // justifyContent: 'center',
  },
  leftCompontntContainer: {
    width: '20%',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
  },
  rightCompontntContainer: {
    width: '20%',
    // justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logout: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default MemoAppHeader;
