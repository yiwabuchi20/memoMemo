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
    color: 'rgba(255, 255, 255, 0.8)',
  },
});

export default MemoAppHeader;
