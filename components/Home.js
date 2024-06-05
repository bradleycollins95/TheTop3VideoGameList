import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from './button.js';
import CurrentItem from './CurrentItem.js';
import games from '../assets/games.json';

const imageList = [
  require('../assets/h3.jpg'),
  require('../assets/tloz.jpg'),
  require('../assets/cs.jpg'),
];

/**
 * Home Component
 * Manages the state for the current item index and passes the appropriate props to other components.
 */
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleButtonPress = (index) => {
    setCurrentIndex(index);
  };

  const handleGamePress = (index) => {
    navigation.navigate('Game', { game: games.games[index], imageIndex: index });
  };

  const currentItem = {
    ...games.games[currentIndex],
    image: imageList[games.games[currentIndex].imageIndex],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 3 Video Games</Text>
      <CurrentItem item={currentItem} />
      {games.games.map((game, index) => (
        <Button
          key={index}
          label={game.name}
          onPress={() => handleButtonPress(index)}
          isSelected={index === currentIndex}
          onLongPress={() => handleGamePress(index)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});





