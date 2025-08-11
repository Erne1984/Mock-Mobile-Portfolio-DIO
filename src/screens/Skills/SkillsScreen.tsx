import { Text, View } from "react-native";
import { styles } from "./SkillsScreenStyle";
import Avatar from "../../components/Avatar/Avatar";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import SkillRow from "../../components/SkillRow/SkillRow";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/Router";

export default function SkillsScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  return (
    <View style={styles.container}>
      <Avatar content="MInhas Habilidades" />

      <View>
        <SkillRow skillName="Javascript" skillLevel={4} />
        <SkillRow skillName="Typescript" skillLevel={3} />
        <SkillRow skillName="React" skillLevel={3.5} />
        <SkillRow skillName="Java" skillLevel={4} />
        <SkillRow skillName="Spring Boot" skillLevel={3} />
        <SkillRow skillName="React Native" skillLevel={2.5} />
      </View>

      <View style={styles.buttonWrapper}>
        <ButtonLink 
        linkName="Entrar em Contato"
          onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}
