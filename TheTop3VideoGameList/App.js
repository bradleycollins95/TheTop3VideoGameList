import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './Navigation';

/**
 * Main App Component
 * Initializes the application, loads game data from JSON, and sets up navigation.
 */
export default function App() {
  const [top3, setTop3] = useState([
    { name: 'Halo', description: 'First-person shooter released by Bungie in 2007', image: require('./assets/h3.jpg') },
    { name: 'The Legend of Zelda: Ocarina of Time', description: 'Third-person RPG released by Nintendo in 1996', image: require('./assets/tloz.jpg') },
    { name: 'Counter-Strike', description: 'First-person shooter series released by Valve in 2000', image: require('./assets/cs.jpg') },
  ]);

  return (
    <View style={styles.container}>
      <Navigation top3={top3} setTop3={setTop3} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});







