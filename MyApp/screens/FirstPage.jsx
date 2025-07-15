import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function FirstPage({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246' }}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent']} style={styles.overlay}>
        <Text style={styles.title}>StyleShop</Text>
        <Text style={styles.subtitle}>Your fashion, your way.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonOutlineText}>Signup</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonOutline: {
    borderColor: '#fff',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  buttonOutlineText: {
    color: '#fff',
    fontSize: 16,
  },
});