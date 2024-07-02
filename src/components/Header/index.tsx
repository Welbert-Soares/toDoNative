import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";



const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Logo.png")} style={styles.logo} />
    </View>
  );
};

export default Header;
