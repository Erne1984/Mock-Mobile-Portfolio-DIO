import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  touchable: {
    width: "80%",
    alignSelf: "center",
    marginVertical: 8, 
  },

  wrapper: {
    position: "relative",
    width: "100%",
    overflow: "visible" 
  },

  shadow: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transform: [{ translateX: 8 }, { translateY: 8 }], 
    backgroundColor: "#111", 
    zIndex: 0,
  },

  button: {
    backgroundColor: "#FF9A9D",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
  },
});
