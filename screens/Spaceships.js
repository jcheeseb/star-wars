import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Spaceships() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Spaceships</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkred',
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    color: 'white',
  },
});
