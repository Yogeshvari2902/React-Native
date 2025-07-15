import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <Button
  title="Login"
  onPress={() => navigation.replace('MainApp')}
  color="#6200EE"
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 12, padding: 10, borderRadius: 8 }
});
