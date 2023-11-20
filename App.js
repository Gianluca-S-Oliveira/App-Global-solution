import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./telas/HomeScreen";
import TelaMedicos from "./telas/TelaMedicos";
import TelaPacientes from "./telas/TelaPacientes";
import TelaInfos from "./telas/TelaInfos";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Medicos" component={TelaMedicos} />
        <Stack.Screen name="Pacientes" component={TelaPacientes} />
        <Stack.Screen name="Telainfos" component={TelaInfos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
