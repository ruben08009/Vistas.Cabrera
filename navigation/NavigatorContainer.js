import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CubiertasScreen from '../screens/CubiertasScreen';
import CambioBateriaScreen from '../screens/CambioBateriaScreen';
import CambioAceiteScreen from '../screens/CambioAciteScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();



const MecanicaNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ title: 'Inicio' }} component={HomeScreen} />
      <Stack.Screen name="Aceite" options={{ title: 'Cambioo de aceite' }} component={CambioAceiteScreen} />
      <Stack.Screen name="Bateria" options={{ title: 'Cambioo de bateria' }} component={CambioBateriaScreen} />
      <Stack.Screen name="Cubiertas" options={{ title: 'Cambioo de cubiertas' }} component={CubiertasScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MecanicaNavigator ;
