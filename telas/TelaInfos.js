// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>testee</Text>
      <Button
        title="Info Pacientes"
        onPress={() => navigation.navigate("Pacientes")}
      />

      <Button
        title="Info Médicos"
        onPress={() => navigation.navigate("Medicos")}
      />
    </View>
  );
};

export default HomeScreen;
