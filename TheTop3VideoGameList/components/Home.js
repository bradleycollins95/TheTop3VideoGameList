import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

/**
 * Home Component
 * Displays the top 3 video games with their details and provides a button to edit the list.
 */
export default function Home({ navigation, top3 }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 3 Video Games</Text>
      {top3.map((game, index) => (
        <View key={index} style={styles.gameContainer}>
          <Image source={game.image} style={styles.image} />
          <Text style={styles.gameName}>{game.name}</Text>
          <Text style={styles.gameDescription}>{game.description}</Text>
        </View>
      ))}
      <Button title="Edit Top 3 List" onPress={() => navigation.navigate('EditTop3')} />
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
    marginBottom: 20,
  },
  gameContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gameDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});








