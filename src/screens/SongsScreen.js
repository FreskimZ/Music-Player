import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Songs() {
  const [isSearch, setIsSearch] = useState(false);
  const searchAnim = useRef(new Animated.Value(0)).current;

  const popIn = () => {
    Animated.timing(searchAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(setIsSearch(!isSearch));
  };

  const popOut = () => {
    Animated.timing(searchAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start(setIsSearch(!isSearch));
  };

  const backgroundAnim = searchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#181b2c', '#585a66'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Icon name="menu" size={30} color="#d0d1d4" />
        {!isSearch ? <Text style={styles.text}>Songs</Text> : null}
        <Animated.View
          style={[
            styles.inputContainer,
            {flex: searchAnim, backgroundColor: backgroundAnim},
          ]}>
          <TouchableOpacity
            onPress={() => {
              isSearch ? popOut() : popIn();
            }}>
            <Icon name="search" size={30} color="#d0d1d4" />
          </TouchableOpacity>
          {isSearch ? <TextInput style={styles.input} /> : null}
        </Animated.View>
      </View>
      <Text>Songs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: '#181b2c',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    paddingHorizontal: 10,
    marginLeft: 10,
    height: 40,
  },
  text: {
    color: '#d0d1d4',
  },
});

export default Songs;
