import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>§</Text>
          <Image
            source={require("../assets/styleforge_logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity onPress={() => console.log("Menu pressed")}>
          <Ionicons name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  header: {
    height: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoIcon: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 20,
    marginRight: 5,
  },
  logoImage: {
    width: 120,
    height: 40,
  },
});
