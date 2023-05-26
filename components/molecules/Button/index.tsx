import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LoginButtonProps {
    onPress: () => void;
    text: string;
    backgroundColor: string;
    borderColor?: string;
}

const ButtonMolecule = ({ onPress, text, backgroundColor, borderColor }: LoginButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor, borderColor }]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ButtonMolecule;
