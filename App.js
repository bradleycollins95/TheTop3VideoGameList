import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Game from './components/Game.js';
import Button from './components/button.js';

import games from './assets/games.json';

const h3Image = require('./assets/h3.jpg');
const tlozImage = require('./assets/tloz.jpg');
const csImage = require('./assets/cs.jpg');

export default function App() {
  const [gameIndex, setGameIndex] = useState(0);

  const handleGamePress = () => {
    setGameIndex((prevIndex) => (prevIndex + 1) % games.games.length);
  }

  const imageList = [h3Image, tlozImage, csImage];

  console.log(games);
  return (
    <View style={styles.container}>
      {games.games && games.games.length > 0 ? (
        <>
          <Game game={games.games[gameIndex]} imageList={imageList} />
          <Button label={"Next Game"} onPress={handleGamePress} />
          <StatusBar style="auto" />
        </>
      ) : (
        <Text>No games available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


