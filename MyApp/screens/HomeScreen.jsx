import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const featuredItems = [
  {
    id: 1,
    title: 'Yellow Floral Dress',
    image: require('../assets/summer.webp'),
    price: '₹999'
  },
  {
    id: 2,
    title: 'Classic Tee',
    image: require('../assets/tees.webp'),
    price: '₹449'
  },
  {
    id: 3,
    title: 'Elegant Blue Jacket',
    image: require('../assets/jacket.jpg'),
    price: '₹699'
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Featured Styles</Text>
      <View style={styles.grid}>
        {featuredItems.map(item => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 380,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingTop: 10,
    color: '#222',
  },
  price: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingBottom: 12,
    color: '#6200EE',
    fontWeight: '500',
  },
});
