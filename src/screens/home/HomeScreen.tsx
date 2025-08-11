import { View } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./HomeStyle";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Avatar from "../../components/Avatar/Avatar";
import { RootStackParamList } from "../../navigation/Router";

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Avatar content="Erne1917" />

      <View style={styles.navButtons}>
        <ButtonLink linkName="GITHUB" url="https://github.com/Erne1984" />
        <ButtonLink
          linkName="LINKEDIN"
          url="https://www.linkedin.com/in/ernesto-amorim/"
          buttonColor="#5EC3ED"
        />
        <ButtonLink
          linkName="E-MAIL"
          url="mailto:ernestofamorim@gmail.com"
          buttonColor="#DC5A96"
        />

        <ButtonLink
          linkName="HABILIDADES"
          buttonColor="#6FCF97"
          onPress={() => navigation.navigate("Skills")}
        />
      </View>
    </View>
  );
}
