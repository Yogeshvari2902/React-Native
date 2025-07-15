import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../components/Header";

export default function CollabRoomScreen() {
  return (
    <View style={styles.container}>
      <Header title="Collab Room" />
      <View style={styles.content}>
        <Image
          source={require("../assets/meetings.webp")}
          style={styles.image}
        />
        <Text style={styles.title}>Ready to Collaborate?</Text>
        <Text style={styles.subtitle}>
          Join your stylist for a live video session.
        </Text>

        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinText}>Join Meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  joinButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  joinText: {
    color: "#fff",
    fontSize: 16,
  },
});
