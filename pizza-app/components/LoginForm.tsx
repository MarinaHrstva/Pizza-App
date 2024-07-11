import { View, StyleSheet } from "react-native";
import React from "react";

import Button from "./ui/Button";
import Input from "./ui/Input";

export default function LoginForm(): React.JSX.Element {
  return (
    <View style={styles.inputContainer}>
      <Input placeholderText="Email" />
      <Input placeholderText="Password" />
      <Button onPress={() => console.log("pressing")}>Log in</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
