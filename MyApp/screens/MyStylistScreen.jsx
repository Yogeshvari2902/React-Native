import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../components/Header";

export default function MyStylistScreen() {
  return (
    <View style={styles.container}>
      <Header title="My Stylist" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.profileCard}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/65.jpg" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Aisha Kapoor</Text>
          <Text style={styles.role}>Fashion Stylist</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Session</Text>
          <View style={styles.appointmentCard}>
            <Text style={styles.date}>Friday, July 19</Text>
            <Text style={styles.time}>5:00 PM - 6:00 PM</Text>
            <Text style={styles.mode}>Mode: Video Call</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Join Session</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggestions</Text>
          <Text style={styles.suggestionText}>
            Your stylist recommends a bold summer look with floral prints and
            pastel tones.
          </Text>
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
  profileCard: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },
  appointmentCard: {
    backgroundColor: "#F3F0FF",
    padding: 16,
    borderRadius: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  time: {
    fontSize: 14,
    color: "#555",
    marginVertical: 4,
  },
  mode: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6200EE",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  suggestionText: {
    fontSize: 14,
    color: "#444",
    backgroundColor: "#FFF8E1",
    padding: 12,
    borderRadius: 8,
  },
});
