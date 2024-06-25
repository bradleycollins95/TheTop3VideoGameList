import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

/**
 * EditTop3 Component
 * Provides a form to edit the top 3 video games and save changes.
 */
export default function EditTop3({ navigation, top3, setTop3 }) {
  const [game1, setGame1] = useState({ ...top3[0] });
  const [game2, setGame2] = useState({ ...top3[1] });
  const [game3, setGame3] = useState({ ...top3[2] });

  const saveChanges = () => {
    setTop3([
      { ...game1, image: require('../assets/h3.jpg') },
      { ...game2, image: require('../assets/tloz.jpg') },
      { ...game3, image: require('../assets/cs.jpg') },
    ]);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Top 3 List</Text>
      <TextInput
        style={styles.input}
        placeholder="Game 1 Name"
        value={game1.name}
        onChangeText={(text) => setGame1({ ...game1, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Game 1 Description"
        value={game1.description}
        onChangeText={(text) => setGame1({ ...game1, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Game 2 Name"
        value={game2.name}
        onChangeText={(text) => setGame2({ ...game2, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Game 2 Description"
        value={game2.description}
        onChangeText={(text) => setGame2({ ...game2, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Game 3 Name"
        value={game3.name}
        onChangeText={(text) => setGame3({ ...game3, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Game 3 Description"
        value={game3.description}
        onChangeText={(text) => setGame3({ ...game3, description: text })}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Save Changes" onPress={saveChanges} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonWrapper: {
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
  },
});





