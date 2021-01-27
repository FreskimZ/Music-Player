import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Icon name={'home'} size={30} color="#585a66" />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.container}>
        <Icon name={'music'} size={30} color="#585a66" />
        <Text style={styles.text}>Songs</Text>
      </View>
      <View style={styles.container}>
        <Icon name={'settings'} size={30} color="#585a66" />
        <Text style={styles.text}>Setting</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#151827',
    height: 60,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#585a66',
  },
});

export default Footer;
