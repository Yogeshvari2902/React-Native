import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

const featuredItems = [
  {
    id: 1,
    title: "Yellow Floral Dress",
    image: require("../assets/summer.webp"),
    price: "₹999",
  },
  {
    id: 2,
    title: "Classic Tee",
    image: require("../assets/tees.webp"),
    price: "₹449",
  },
  {
    id: 3,
    title: "Elegant Blue Jacket",
    image: require("../assets/jacket.jpg"),
    price: "₹699",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={require("../assets/banner.jpg")}
          style={styles.banner}
          resizeMode="cover"
        />
        <Text style={styles.subtitle}>
          Discover the latest trends and handpicked styles just for you!
        </Text>
        <Text style={styles.title}>Featured Styles</Text>

        {/* Category Badges */}
        <View style={styles.badges}>
          {["All", "Dresses", "Tops", "Jackets"].map((category, index) => (
            <TouchableOpacity key={index} style={styles.badge}>
              <Text style={styles.badgeText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Product Grid */}
        <View style={styles.grid}>
          {featuredItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scroll: {
    padding: 16,
    paddingBottom: 100,
  },
  banner: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
    marginBottom: 12,
  },
  badges: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  badge: {
    backgroundColor: "#EFE7FD",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginBottom: 10,
  },
  badgeText: {
    color: "#6200EE",
    fontSize: 14,
    fontWeight: "500",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    width: "48%",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "600",
    paddingHorizontal: 10,
    paddingTop: 8,
    color: "#333",
  },
  price: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingBottom: 12,
    color: "#6200EE",
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 12,
  },
});
