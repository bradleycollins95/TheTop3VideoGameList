import { Image, Text, View, StyleSheet } from 'react-native';

/**
 * Game Component
 * @param {Object} route - The route object provided by React Navigation
 * @param {Object} route.params - Parameters passed to the route
 * @param {Object} route.params.game - The game object containing details of the game
 * @param {number} route.params.imageIndex - The index of the game's image in the image list
 */
export default function Game({ route }) {
  const { game, imageIndex } = route.params;
  const imageList = [
    require('../assets/h3.jpg'),
    require('../assets/tloz.jpg'),
    require('../assets/cs.jpg')
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.name}</Text>
      <Image source={imageList[imageIndex]} style={styles.image} />
      <Text style={styles.year}>Year: {game.year}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
  },
  year: {
    fontSize: 18,
    margin: 5,
  },
  description: {
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

