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
          Welcome to the StyleShop Community! Connect, share, and inspire.
        </Text>

        {/* Sample Posts */}
        <View style={styles.postCard}>
          <Text style={styles.user}>@fashion_lover</Text>
          <Text style={styles.postText}>
            Loving this summer collection! 🌼 What's your favorite pick?
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Text style={styles.actionBtn}>👍 Like</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionBtn}>💬 Comment</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.postCard}>
          <Text style={styles.user}>@stylequeen</Text>
          <Text style={styles.postText}>
            Just had my session with Aisha and she totally nailed my vibe! 🔥
          </Text>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Text style={styles.actionBtn}>👍 Like</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.actionBtn}>💬 Comment</Text>
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
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
    paddingBottom: 80,
  },
  intro: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  postCard: {
    backgroundColor: "#F9F9F9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  user: {
    fontWeight: "bold",
    color: "#6200EE",
    marginBottom: 6,
  },
  postText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionBtn: {
    fontSize: 14,
    color: "#6200EE",
  },
});
