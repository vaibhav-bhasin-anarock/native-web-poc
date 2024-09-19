import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const Demo = () => {
  const [counter, setCounter] = useState(0);
  const borderColor = useState(new Animated.Value(0))[0];

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderColor, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(borderColor, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [borderColor]);

  const borderColorInterpolation = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(255,0,0)", "rgb(0,0,255)"],
  });

  const animatedStyle = {
    borderColor: borderColorInterpolation,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCounter}>
        <Text style={styles.buttonText}>Increment Counter</Text>
      </TouchableOpacity>
      <View style={styles.borderBox}>
        <Text>Regular Border</Text>
      </View>
      <View style={styles.dottedBorderBox}>
        <Text>Dotted Border</Text>
      </View>
      <Animated.View style={[styles.animatedBorderBox, animatedStyle]}>
        <Text>Animated Border</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
    shadowColor: "#000", // Black shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Android shadow
  },
  button: {
    backgroundColor: "#6200EE",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#6200EE", // Colored shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  borderBox: {
    borderWidth: 2,
    borderColor: "#000",
    padding: 10,
    marginTop: 20,
  },
  dottedBorderBox: {
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "dotted",
    padding: 10,
    marginTop: 20,
  },
  animatedBorderBox: {
    borderWidth: 2,
    padding: 10,
    marginTop: 20,
  },
});

export { Demo };
