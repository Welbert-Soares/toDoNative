import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type WorkProps = {
  task: string;
  onRemove: () => void;
  isActive: () => void;
  status: boolean;
};

const Work = ({ task, onRemove, isActive, status }: WorkProps) => {

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={isActive}>
          <Image 
            source={status ? require("../../../assets/verfi.png") : require("../../../assets/radion.png")}
          />
        </TouchableOpacity>
        <Text style={ !status ? styles.descriptionText : styles.taskFind}>{task}</Text>
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
