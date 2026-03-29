import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>InviteWala</Text>
      <Text style={styles.subtitle}>App is working!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C14",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#C77DFF",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 12,
  },
});
