import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.detail}>Name: Yogeshvari</Text>
      <Text style={styles.detail}>Email: yogesh@example.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, marginBottom: 10, fontWeight: 'bold' },
  detail: { fontSize: 16, marginBottom: 5 }
});