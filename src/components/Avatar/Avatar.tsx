import { Image, View, Text } from "react-native";

import { styles } from "./AvatarStyle";

interface AvatarProps {
  content: string
}

export default function Avatar(props: AvatarProps) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/59/Saint_Just.jpg",
        }}
      />
      <Text style={styles.title}>{props.content}</Text>
    </View>
  );
}
