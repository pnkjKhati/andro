import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Pagin from "./src/screens/Pagin";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#FFFFFF" />
      <View style={styles.a_container}>
        <Pagin />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  a_container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center"
  }
});
