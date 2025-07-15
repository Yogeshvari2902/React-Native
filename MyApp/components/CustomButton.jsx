import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#ecc24fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
