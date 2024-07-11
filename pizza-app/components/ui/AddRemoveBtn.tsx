import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  onPress: () => void;
  name: string;
};

export default function AddRemoveBtn({
  onPress,
  name,
}: Props): React.JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Ionicons name={name} size={12} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {},
});
