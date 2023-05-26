import React from "react";
import { View, StyleSheet } from "react-native";

interface PickerProps {
    backgroundColor?: string;
    items: {
        id: number;
        value: string;
        label: string;
    }[]
}

import { Picker } from "@react-native-picker/picker";

const PickerAtom = ({ items, backgroundColor }: PickerProps) => {
    return (
        <Picker style={[styles.input, { backgroundColor }]}>
            {items.map(register => <Picker.Item key={register.id} label={register.label} value={register.value} />)}
        </Picker>
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

export default PickerAtom;