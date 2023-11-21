import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" size={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#003010",
    left: 0,
    zIndex: -1,
    right: 0,
    height: "10%", //
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Footer;
