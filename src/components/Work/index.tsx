import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useState } from "react";

type WorkProps = {
  task: string;
  onRemove: () => void;
  isActive: boolean;
};

const Work = ({ task, onRemove, isActive }: WorkProps) => {
  const handlePress = () => {
    if (isActive) {
      console.log("Tarefa concluída");
    } else {
      console.log("Tarefa não concluída");
    }
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
          <Image 
            source={isActive ? require("../../../assets/verfi.png") : require("../../../assets/radion.png")}
          />
        </TouchableOpacity>
        <Text style={styles.descriptionText}>{task}</Text>
        <TouchableOpacity onPress={onRemove}>
          <Image 
            source={require("../../../assets/lixeira.png")}
            style={styles.lixeira}
          />
        </TouchableOpacity>
    </View>
  );
};

export default Work;
