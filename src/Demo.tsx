import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, incrementCounter } from '../index';

export const Demo: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(incrementCounter(count));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button onPress={handleIncrement} title="Increment" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});