import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Planets() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Planets</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
  },
});

