import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import * as RootNavigation from '../util/RootNavigation';
import Icon from 'react-native-vector-icons/Feather';

function Footer({navigationRef}) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => RootNavigation.navigate('MainScreen')}>
        <View style={styles.container}>
          <Icon name={'home'} size={30} color="#585a66" />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => RootNavigation.navigate('SongsScreen')}>
        <View style={styles.container}>
          <Icon name={'music'} size={30} color="#585a66" />
          <Text style={styles.text}>Songs</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Not yet implemented')}>
        <View style={styles.container}>
          <Icon name={'settings'} size={30} color="#585a66" />
          <Text style={styles.text}>Setting</Text>
        </View>
      </TouchableOpacity>
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
