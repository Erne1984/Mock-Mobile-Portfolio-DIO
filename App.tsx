import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Avatar from "./src/components/Avatar/Avatar";
import ButtonLink from "./src/components/ButtonLink/ButtonLink";

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar />
 
      <View style={styles.navButtons}>
        <ButtonLink linkName="GITHUB"  />
        <ButtonLink linkName="LINKEDIN" buttonColor="#5EC3ED"/>
        <ButtonLink linkName="E-MAIL"  buttonColor="#DC5A96"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FEDB51",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100
  },
  navButtons: {
    width: "100%",
    alignItems: "center",
    gap: 25,
    marginTop: 30
  }
});
