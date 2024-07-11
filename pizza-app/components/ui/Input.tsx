import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { COLORS } from "../../styles/styles";

type Props = {
  placeholderText: string;
};

export default function Input({ placeholderText }: Props): React.JSX.Element {
  return (
    <TextInput
      placeholder={placeholderText}
      style={styles.input}
      placeholderTextColor={COLORS.Neutral800}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.Neutral300,
    color: COLORS.Neutral800,
    borderRadius: 4,
    padding: 8,
    margin: 8,
    width: 250,
  },
});
