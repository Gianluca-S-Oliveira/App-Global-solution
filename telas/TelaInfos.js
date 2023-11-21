// screens/TelaInfos.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import TopBar from "../components/topbar";
import Footer from "../components/footer";
import Icon from "react-native-vector-icons/FontAwesome5";
const TelaInfos = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TopBar></TopBar>
      <Image
        style={styles.logo}
        alt="imagem da logo"
        source={require("../assets/medico.jpg")}
      />
      <Text style={styles.text}>
        A InfoHelth tem o objetivo informativo para pacientes, medicos e
        intusiatas que desejam se informar com inteligencia artifical! comece
        explorando um dos topicos:{" "}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Pacientes")}
        >
          <Icon name="hospital-user" size={30} color="white" />
          <Text style={styles.buttonText}>Info Pacientes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Medicos")}
        >
          <Icon name="hospital-alt" size={30} color="white" />
          <Text style={styles.buttonText}>Info Medicos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomHalf} />
      <Footer></Footer>
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

  text: {
    paddingHorizontal: 40,
    textAlign: "center",
    color: "#003010",
    fontSize: 18,
    fontWeight: "700",
  },
  bottomHalf: {
    position: "absolute",
    bottom: 100,

    left: 0,
    zIndex: -1,
    right: 0,
    height: "15%", // Ajuste a altura conforme necessário
    backgroundColor: "#216C00",
  },
  logo: {
    height: 220,
    width: 220,
    marginTop: -50,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    gap: 35,
    paddingHorizontal: 50,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#2A8400",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    gap: 10,
    borderWidth: 3,
    borderColor: "white",
    width: 160,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default TelaInfos;
