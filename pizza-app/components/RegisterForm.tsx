import { View, Text } from "react-native";
import React from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

export default function RegisterForm() {
  return (
    <View>
      <Input placeholderText="Email" />
      <Input placeholderText="Confirm email" />
      <Input placeholderText="Password" />
      <Input placeholderText="Confirm password" />
      <Button onPress={() => console.log("pressing")}>Register</Button>
    </View>
  );
}
