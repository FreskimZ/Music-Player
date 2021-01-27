import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Menu({showMenu}) {
  const width = Dimensions.get('screen').width;
  const widthAnim = useRef(new Animated.Value(width)).current;

  const popIn = () =>
    Animated.timing(widthAnim, {
      toValue: 100,
      duration: 300,
      useNativeDriver: false,
    }).start();

  const popOut = () =>
    Animated.timing(widthAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: false,
    }).start(showMenu(false));

  useEffect(popIn);

  return (
    <Animated.View style={[styles.container, {right: widthAnim}]}>
      <View style={styles.logoContainer}>
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => {
              popOut();
            }}>
            <Icon name="arrow-left" size={30} color="black" />
          </TouchableOpacity>
          <Icon name="music" size={50} color="black" />
        </View>
        <View style={styles.info}>
          <View style={styles.textInfo}>
            <Text style={styles.textColor}>200</Text>
            <Text style={styles.textColor}>Songs</Text>
          </View>
          <View style={styles.textInfo}>
            <Text style={styles.textColor}>50</Text>
            <Text style={styles.textColor}>Albums</Text>
          </View>
          <View style={styles.textInfo}>
            <Text style={styles.textColor}>100</Text>
            <Text style={styles.textColor}>Artists</Text>
          </View>
        </View>
      </View>
      <Card icon="music" text="Themes" />
      <Card icon="scissors" text="Ringtone Cutter" size={30} />
      <Card icon="clock-o" text="Sleep mode" />
      <Card icon="car" text="Drive mode" size={28} />
    </Animated.View>
  );
}

function Card({icon, text, path, size = 35}) {
  return (
    <View style={styles.card}>
      <Icon name={icon} size={size} />
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 100,
    backgroundColor: '#181B2c',
    zIndex: 5,
    height: Dimensions.get('screen').height,
    elevation: 25,
  },
  logoContainer: {
    backgroundColor: '#383b49',
    height: 250,
    width: 'auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
  },
  textInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#d0d1d4',
  },
  card: {
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  cardText: {
    borderBottomColor: '#585a66',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: 15,
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
  },
});

export default Menu;
