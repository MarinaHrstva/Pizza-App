import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { COLORS } from "./styles/styles";
import LoginPage from "./screens/LoginPage";

export default function App(): React.JSX.Element {
  return (
    <ImageBackground>
      <View style={styles.container}>
        <StatusBar />
        <LoginPage />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Neutral500,
    alignItems: "center",
    justifyContent: "center",
  },
});
