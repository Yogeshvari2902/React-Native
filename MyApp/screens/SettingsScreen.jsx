import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode && styles.dark]}>
      <Text style={[styles.text, darkMode && styles.darkText]}>
        Theme: {darkMode ? "Dark" : "Light"}
      </Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  dark: { backgroundColor: "#333" },
  text: { fontSize: 18, marginBottom: 10 },
  darkText: { color: "#fff" }
});
