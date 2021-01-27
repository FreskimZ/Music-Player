import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

function PreLoadingScreen() {
  return (
    <View style={styles.container}>
      <Text>PreLoading...</Text>
    </View>
  );
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
});

export default PreLoadingScreen;
