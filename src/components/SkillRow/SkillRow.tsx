import { useState } from "react";
import { Text, View } from "react-native";

import StarRating from "react-native-star-rating-widget";
import { styles } from "./SkillRowStyle";

interface SkillRowProps {
  skillName: string;
  skillLevel: number;
}

export default function SkillRow(props: SkillRowProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.skillName}:</Text>

      <StarRating
        rating={props.skillLevel}
        onChange={() => {}}
        enableSwiping={false}
        color="#000"
        starSize={28}
      />
    </View>
  );
}
