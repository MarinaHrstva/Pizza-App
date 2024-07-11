import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./styles/styles";
import LoginPage from "./screens/LoginPage";

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar />
      <LoginPage />
    </View>
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
