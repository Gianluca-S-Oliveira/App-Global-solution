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
  const urlCabeca = "https://telemedicinamorsch.com.br/blog/dor-cabeca";
  const urlAbdominal =
    "https://www.msdmanuals.com/pt-br/casa/dist%C3%BArbios-digestivos/sintomas-de-dist%C3%BArbios-digestivos/dor-abdominal-aguda";
  const urlNauseas = "https://www.rededorsaoluiz.com.br/doencas/nausea";
  const urlGripe =
    "https://beepsaude.com.br/gripe-o-que-e-sintomas-vacinas-gripe-h1n1/?utm_source=google&utm_medium=cpc&utm_campaign=gsn.vacina.geral&utm_content=gsn.vacina.dsa&utm_term=_&gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6mybqC_6stYHG28zx7H3cqosCdnSnfmN16XG5em_YPK1alYVWFgSNwaAumyEALw_wcB";
  const handleLinkCabeca = () => {
    Linking.openURL(urlCabeca);
  };
  const handleLinkAbdominal = () => {
    Linking.openURL(urlAbdominal);
  };
  const handleLinkNauseas = () => {
    Linking.openURL(urlNauseas);
  };
  const handleLinkGripe = () => {
    Linking.openURL(urlGripe);
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
      <Text style={styles.titulo}>Info Pacientes</Text>
      <Image
        style={styles.logo}
        alt="imagem da logo"
        source={require("../assets/img2.jpg")}
      />
      <Text style={styles.titulo2}>Está com um desses sintomas?</Text>
      <View style={styles.sintomas}>
        <TouchableOpacity onPress={handleLinkCabeca}>
          <Text style={styles.linkText}>DOR DE CABEÇA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkAbdominal}>
          <Text style={styles.linkText}>DOR ABDOMINAL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sintomas}>
        <TouchableOpacity onPress={handleLinkNauseas}>
          <Text style={styles.linkText}>NAUSEAS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkGripe}>
          <Text style={styles.linkText}>SINTOMAS GRIPAIS</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo3}>O que há de novidade:</Text>
      <Noticia texto="Aprovado projeto de inclusão de usuários do SUS em prontuário eletrônico integrado" />
      <Noticia texto="Cinco anos de PrEP: política anti-HIV avança, mas se concentra no Sudeste" />

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
  linkText: {
    margin: 12,
    color: "white",
    width: 150,
    borderColor: "white",
    backgroundColor: "#006C25",
    paddingVertical: 13,
    borderRadius: 10,
    textAlign: "center",
  },
  sintomas: {
    padding: 3,

    flexDirection: "row",
    gap: 5,
  },
  titulo: {
    color: "#278100",
    fontSize: 30,
    fontWeight: "800",
    textAlign: "left",
    marginLeft: -130,
    marginBottom: 10,
    marginTop: -50,
  },
  titulo2: {
    fontSize: 15,
    marginTop: 5,
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
    marginLeft: -150,
  },
});
export default TelaMedicos;
