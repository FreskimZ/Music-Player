import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

function Carousel({songs}) {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.continer}
        alwaysBounceHorizontal={true}>
        {songs.map((uri, index) => (
          <View style={styles.song} key={index}>
            <Image source={{uri: uri}} style={styles.image} />
            <Text style={styles.songName}>Song name</Text>
            <Text style={styles.authorName}>Author</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {},
  song: {
    borderBottomColor: '#585a66',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  songName: {
    color: '#d0d1d4',
    fontSize: 16,
    paddingTop: 8,
  },
  authorName: {
    color: '#585a66',
    fontSize: 12,
    paddingVertical: 10,
  },
});

export default Carousel;
