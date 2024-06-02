import { Image, Text, View, StyleSheet } from 'react-native';

export default function Game({ game, imageList }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.name}</Text>
      <Image source={imageList[game.imageIndex]} style={styles.image} />
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
