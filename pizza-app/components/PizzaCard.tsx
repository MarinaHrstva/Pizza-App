import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Button from "./ui/Button";
import AddRemoveBtn from "./ui/AddRemoveBtn";

export default function PizzaCard() {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/shayan-ramesht-exSEmuA7R7k-unsplash.jpg")}
          style={styles.image}
        />
      </View>
      <View>
        <Text>Pizza Name</Text>
        <Text>Ingredient 1, ingredient 2, ingredient 3</Text>
        <Text>Price-15,99lv.</Text>
      </View>
      <View style={styles.btnContainer}>
        <AddRemoveBtn name="remove" onPress={() => console.log("press")} />
        <TextInput placeholder="1" />
        <AddRemoveBtn name="add" onPress={() => console.log("press")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 250,
    height: 250,
    overflow: "hidden",
    borderRadius: 6,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
