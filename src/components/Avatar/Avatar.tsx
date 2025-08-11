import { Image, View, Text } from "react-native";

import { styles } from "./AvatarStyle";

export default function Avatar() {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/59/Saint_Just.jpg",
        }}
      />
      <Text style={styles.username}>Erne1917</Text>
    </View>
  );
}
