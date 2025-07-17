import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Header title="Community" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.intro}>
          Welcome to the StyleShop Community! Connect, share, and get inspired.
        </Text>

        <Text style={styles.sectionTitle}>Latest Posts</Text>

        {/* Post Card 1 */}
        <View style={styles.postCard}>
          <Text style={styles.user}>@fashion_lover</Text>
          <Text style={styles.postText}>
            Loving this summer collection! 🌼 What's your favorite pick?
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>👍 Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>💬 Comment</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Post Card 2 */}
        <View style={styles.postCard}>
          <Text style={styles.user}>@stylequeen</Text>
          <Text style={styles.postText}>
            Just had my session with Aisha and she totally nailed my vibe! 🔥
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>👍 Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>💬 Comment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  intro: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginVertical: 10,
  },
  postCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  user: {
    fontWeight: "600",
    color: "#6200EE",
    marginBottom: 6,
    fontSize: 15,
  },
  postText: {
    fontSize: 15,
    color: "#444",
    marginBottom: 12,
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#EFE7FD",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  buttonText: {
    color: "#6200EE",
    fontWeight: "500",
    fontSize: 14,
  },
});
