import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

function SongContainer({
  rating = 0,
  songName = 'unknown',
  artist = 'unknown',
  favorite = false,
}) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const onPress = () => {
    setIsFavorite(!isFavorite);
  };
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push('star');
    } else {
      stars.push('staro');
    }
  }

  let starComponents = stars.map((name, index) => (
    <Icon name={name} color={'#e1914b'} size={17} key={index} />
  ));

  return (
    <View style={styles.container}>
      <Icon name={'play'} color={'gray'} size={30} />
      <View style={styles.border}>
        <View style={styles.text}>
          <Text style={styles.songName}>{songName}</Text>
          <Text style={styles.arist}>{artist}</Text>
        </View>
        <View style={styles.ratings}>
          <TouchableOpacity onPress={onPress}>
            <View>
              <Icon
                name={favorite ? 'heart' : 'hearto'}
                color={'#e1914b'}
                size={17}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.stars}>{starComponents}</View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratings: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  stars: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  text: {
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  songName: {
    color: '#d0d1d4',
    fontWeight: 'bold',
  },
  arist: {
    color: '#d0d1d4',
    fontSize: 12,
  },
  border: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 10,
    height: 60,
  },
});

export default SongContainer;
