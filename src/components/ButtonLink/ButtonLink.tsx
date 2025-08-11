import React, { useRef } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  Animated,
  Linking,
  Alert,
} from "react-native";
import { styles } from "./ButtonLinkStyle";

interface ButtonLinkProps {
  linkName: string;
  url?: string;
  onPress?: () => void;
  buttonColor?: string;
  shadowColor?: string;
}

export default function ButtonLink({
  linkName,
  url,
  onPress,
  buttonColor = "#FF9A9D",
  shadowColor = "#111",
}: ButtonLinkProps) {
  const translateY = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.spring(translateY, {
      toValue: -5,
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

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    if (url) {
      Alert.alert(
        "Você vai sair do aplicativo",
        "Deseja continuar?",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Sim",
            onPress: () => {
              Linking.canOpenURL(url)
                .then((supported) => {
                  if (supported) {
                    Linking.openURL(url);
                  } else {
                    console.warn("Não é possível abrir essa URL:", url);
                  }
                })
                .catch((err) => console.error("Erro ao abrir URL:", err));
            },
          },
        ],
        { cancelable: true }
      );
    }
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
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
