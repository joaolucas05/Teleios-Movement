import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface TextInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    backgroundColor?: string;
}

const TextInputAtom = ({ placeholder, value, onChangeText, secureTextEntry, backgroundColor }: TextInputProps) => {
  return (
    <TextInput
      style={[styles.input, { backgroundColor }]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
});

export default TextInputAtom;
