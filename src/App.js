import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './util/RootNavigation';
import MainScreen from './screens/MainScreen';
import Footer from './components/Footer';
import Songs from './screens/SongsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SongsScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SongsScreen" component={Songs} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  app: {
    margin: 0,
    padding: 0,
  },
  container: {
    height: height,
  },
});

export default App;
