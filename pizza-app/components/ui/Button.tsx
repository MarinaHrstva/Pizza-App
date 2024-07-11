import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/styles";

type Props = {
  children: string;
  onPress: () => void;
};

function Button({ children, onPress }: Props): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Neutral800,
    borderRadius: 4,
    padding: 12,
    minWidth: 150,
    marginTop: 12,
  },
  pressed: { opacity: 0.5 },
  text: {
    color: COLORS.Neutral300,
    textAlign: "center",
  },
});
