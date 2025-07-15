// screens/ExploreScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const categories = ['All', 'Jeans', 'T-Shirts', 'Shoes'];

const exploreItems = [
  {
    id: 1,
    title: 'Slim Fit Jeans',
    
    image: require('../assets/jeans.webp'),
    price: '₹999',
    category: 'Jeans',
  },
  {
    id: 2,
    title: 'Basic T-Shirt',
    
    image: require('../assets/tshirt.webp'),
    price: '₹499',
    category: 'T-Shirts',
  },
  {
    id: 3,
    title: 'White Sneakers',
    
    image: require('../assets/shoes.webp'),
    price: '₹1299',
    category: 'Shoes',
  },
];

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? exploreItems
    : exploreItems.filter(item => item.category === selectedCategory);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore Products</Text>
      <View style={styles.categoryBar}>
     {categories.map(cat => {
  const isSelected = selectedCategory === cat;
  return (
    <TouchableOpacity
      key={cat}
      style={[styles.categoryButton, isSelected && styles.categorySelected]}
      onPress={() => setSelectedCategory(cat)}
    >
      <Text style={[styles.categoryText, isSelected && styles.categoryTextSelected]}>{cat}</Text>
    </TouchableOpacity>
  );
})}
      </View>
      <View style={styles.grid}>
        {filteredItems.map(item => (
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
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  categoryBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginHorizontal: 6,
    marginBottom: 10,
  },
  categorySelected: {
    backgroundColor: '#6200EE',
  },
  categoryText: {
    color: '#6200EE',
    fontWeight: '500',
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
  categoryTextSelected: {
  color: '#FFFFFF',
},
});
