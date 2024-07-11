import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  children: string;
  onPress: () => void;
};

function Button({ children, onPress }: Props): React.JSX.Element {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
