import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';

/**
 * CurrentItem Component
 * @param {Object} props - Component props
 * @param {Object} props.item - The current item to display
 * @param {string} props.item.name - The name of the game
 * @param {Object} props.item.image - The image of the game
 * @param {number} props.item.year - The release year of the game
 * @param {string} props.item.description - The description of the game
 */
export default function CurrentItem({ item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.year}>Year: {item.year}</Text>
      <View style={styles.descriptionContainer}>
        <ScrollView>
          <Text style={styles.description}>{item.description}</Text>
        </ScrollView>
      </View>
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
    borderColor: '#A020F0',
    borderRadius: 5,
    width: 250,
    height: 250,
    margin: 10,
  },
  year: {
    fontSize: 18,
    margin: 5,
  },
  descriptionContainer: {
    width: 600,
    height: 110,
    padding: 10,
    borderWidth: 1,
    borderColor: '#A020F0',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    margin: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
