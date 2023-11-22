// screens/TopBar.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        alt="imagem da logo"
        source={require("../assets/logo.png")}
      />
      <Icon name="search" size={30} color="#7ED990" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -10,
    borderColor: "red",
    left: 0,
    zIndex: -1,
    right: 0,
    height: "20%", //
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paragraph: {
    margin: 24,
    marginTop: -70,

    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  logo: {
    height: 70,
    width: 70,
  },
});

export default TopBar;
