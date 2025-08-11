import { Text, View } from "react-native";
import { styles } from "./SkillsScreenStyle";
import Avatar from "../../components/Avatar/Avatar";



export default function SkillsScreen() {

    return(
        <View style={styles.container}>

            <Avatar/>


            <Text>Olá skills</Text>


        </View>
    )
}