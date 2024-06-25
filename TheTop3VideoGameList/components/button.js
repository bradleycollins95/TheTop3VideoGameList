import { Pressable, Text, View, StyleSheet } from 'react-native';

/**
 * Button Component
 * @param {Object} props - Component props
 * @param {string} props.label - The label of the button
 * @param {function} props.onPress - The function to call when the button is pressed
 * @param {boolean} props.isSelected - Indicates if the button is selected
 * @param {function} props.onLongPress - The function to call when the button is long-pressed
 */
export default function Button({ label, onPress, isSelected, onLongPress }) {
  return (
    <View style={[styles.buttonContainer, isSelected && styles.selectedButtonContainer]}>
      <Pressable
        style={[styles.button, isSelected && styles.selectedButton]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={[styles.buttonLabel, isSelected && styles.selectedButtonLabel]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    backgroundColor: "#444",
  },
  selectedButtonContainer: {
    backgroundColor: "#A020F0", //different background color for selected state
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedButton: {
    backgroundColor: "#E6E6FA", //different background color for selected state
  },
  buttonLabel: {
    color: '#E6E6FA',
    fontSize: 16,
  },
  selectedButtonLabel: {
    color: '#000', //different text color for selected state
  },
});


