// screens/HomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Olá! Seja Bem-vindo ao</Text>
      <Image
        style={styles.logo}
        alt="imagem da logo"
        source={require("../assets/logo.png")}
      />
      <Text style={styles.text}>
        Aqui juntamos as últimas informações sobre saude com base em
        inteligência artifical só para você.
      </Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Telainfos")}
      >
        <Text style={styles.buttonText}>Começar a explorar</Text>
      </TouchableOpacity>
      <View style={styles.bottomHalf} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  bottomHalf: {
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    left: 0,
    zIndex: -1,
    right: 0,
    height: "55%", // Ajuste a altura conforme necessário
    backgroundColor: "#216C00", // Cor de fundo da div
  },
  paragraph: {
    margin: 24,
    marginTop: -70,

    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  logo: {
    height: 180,
    width: 180,
  },
  text: {
    fontSize: 20,
    color: "white",
    marginTop: 100,
    padding: 20,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#7ED957",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomeScreen;
