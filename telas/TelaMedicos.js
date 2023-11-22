import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import Noticia from "../components/Textonoticia";
import TopBar from "../components/topbar";
import Footer from "../components/footer";
const TelaMedicos = ({ navigation }) => {
  const url = "https://www.medicinanet.com.br/forum.vxlpub";
  const handleLinkPress = () => {
    Linking.openURL(url);
  };
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
      <Text style={styles.titulo}>Info Medicos</Text>
      <Image
        style={styles.logo}
        alt="imagem da logo"
        source={require("../assets/img1.jpg")}
      />
      <Text style={styles.titulo2}>O que há de novidade:</Text>
      <Noticia texto="Ministérios da Saúde e da Educação retomam Coordenação Nacional do Programa Mais Médicos" />
      <Noticia texto="Ministério da Saúde divulga resultado final da segunda chamada do programa Mais Médicos" />
      <Text style={styles.titulo3}>
        Fóruns recentementee criados, participe da discussão!
      </Text>
      <View style={styles.containerLinks}>
        <View style={styles.containerLink}>
          <Text style={{ width: 100, color: "white", textAlign: "center" }}>
            Avanços em Tratamentos Oncológicos:
          </Text>
          <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.linkText}>Participe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerLink}>
          <Text style={{ width: 110, color: "white", textAlign: "center" }}>
            Desenvolvimentos em Medicina Personalizada
          </Text>
          <TouchableOpacity onPress={handleLinkPress}>
            <Text style={styles.linkText}>Participe</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer></Footer>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 340,
    borderRadius: 20,
  },
  titulo: {
    color: "#278100",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "left",
    marginLeft: -130,
    marginBottom: 10,
    marginTop: -40,
  },
  titulo2: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: "600",
    textAlign: "left",
    marginLeft: -120,
    marginBottom: 10,
  },
  titulo3: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "600",
    textAlign: "left",
    marginBottom: 10,
  },
  containerLinks: {
    flexDirection: "row",
    gap: 25,
    marginTop: 20,
  },
  containerLink: {
    backgroundColor: "#288400",
    width: 150,
    padding: 20,
    color: "white",
    borderRadius: 10,
  },
  linkText: {
    backgroundColor: "#003010",
    color: "white",
    padding: 5,
    marginTop: 10,
    textAlign: "center",
    borderRadius: 10,
  },
});
export default TelaMedicos;
