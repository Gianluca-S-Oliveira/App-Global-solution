import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Noticia = (props) => {
  const { texto } = props;

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "white",
        margin: 10,
        borderWidth: 3,
        borderRadius: 10,
        width: "85%",
        borderColor: "#7ED957",
        paddingVertical: 5,
      }}
    >
      <Text>{texto}</Text>
    </View>
  );
};

export default Noticia;
