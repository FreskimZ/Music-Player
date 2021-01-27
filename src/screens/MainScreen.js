import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SongContainer from '../components/SongContainer';
import Carousel from '../components/Carousel';
import Searchbar from '../components/Searchbar';
import Menu from '../components/Menu';

function MainScreen() {
  //const [isLoading, setIsLoading] = useState(true);

  const [isMenu, setIsMenu] = useState(false);
  const uri =
    'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg';
  const arr = [uri, uri, uri, uri];
  const songs = [
    {songName: 'Hello love', artist: 'Steve', rating: 1, favorite: true},
    {songName: 'supp', artist: 'Steve', rating: 3},
    {songName: 'Hello', artist: 'bob bob', rating: 4, favorite: true},
    {songName: 'Hey', artist: 'Jhon', rating: 2},
    {songName: 'Good', artist: 'Jhon', rating: 5},
  ];

  let songList = songs.map(({songName, artist, rating, favorite}) => (
    <SongContainer
      rating={rating}
      songName={songName}
      artist={artist}
      favorite={favorite}
      key={songName + artist}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Menu showMenu={setIsMenu} />

      <Searchbar showMenu={setIsMenu} />
      <Text style={styles.boldText}>Hot Recommended</Text>
      <Carousel songs={arr} />
      <View style={styles.text}>
        <Text style={styles.boldText}>Playlist</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      <Carousel songs={arr} />
      <View style={styles.text}>
        <Text style={styles.boldText}>Recently Played</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
      {songList}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    paddingBottom: 50,
  },
  boldText: {
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#d0d1d4',
  },
  text: {
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewAll: {
    color: '#DB7D69',
  },
  songs: {
    flex: 1,
    height: 500,
  },
});

export default MainScreen;
