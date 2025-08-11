import React, { useRef } from "react";
import { TouchableWithoutFeedback, View, Text, Animated } from "react-native";
import { styles } from "./ButtonLinkStyle";

interface ButtonLinkProps {
  linkName: string;
  buttonColor?: string;
  shadowColor?: string;
}

export default function ButtonLink({
  linkName,
  buttonColor = "#FF9A9D",
  shadowColor = "#111",
}: ButtonLinkProps) {
  const translateY = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: -5, // move 5px pra cima
      useNativeDriver: true,
      speed: 50,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      speed: 50,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.touchable}>
        <View style={[styles.shadow, { backgroundColor: shadowColor }]} />
        <Animated.View
          style={[
            styles.button,
            { backgroundColor: buttonColor },
            { transform: [{ translateY }] },
          ]}
        >
          <Text style={styles.buttonText}>{linkName}</Text>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
