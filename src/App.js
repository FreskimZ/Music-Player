import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import Footer from './components/Footer';
import Songs from './screens/SongsScreen';

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.app}>
        <Songs />
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#181b2c',
    flex: 1,
  },
  container: {
    height: height,
  },
});

export default App;
