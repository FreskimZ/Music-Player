import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Searchbar({showMenu}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => showMenu(true)}>
        <Icon name="menu" color="#d0d1d4" size={30} />
      </TouchableOpacity>
      <View style={styles.searchbox}>
        <Icon name="search" color="#585a66" size={25} />
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={'#585a66'}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  searchbox: {
    flex: 1,
    paddingHorizontal: 5,
    marginLeft: 10,
    flexDirection: 'row',
    backgroundColor: '#292E4B',
    borderRadius: 50,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#D0D1D4',
  },
});

export default Searchbar;
