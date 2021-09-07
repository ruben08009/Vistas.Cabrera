import React from 'react';
import { StyleSheet, Text,TouchableHighlight, Image, View } from 'react-native';
import  ButtonMecanica from '../componnents/ButtonMecanica'


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.header}  source={require('../assets/home.jpg')}/>
      <Text style={styles.title}>Bienvenido a Mecánica Cabrera</Text>
      <Text>Seleccione su servicio</Text>
      <View style={styles.optioncontainer}>

      
      <ButtonMecanica titulo="Cambio de aceite" urlimg={require('../assets/aceite.png')} onpress={() => navigation.navigate('Aceite')}/> 
      <ButtonMecanica titulo="Cambio de bateria" urlimg={require('../assets/bateria.png')} onpress={() => navigation.navigate('Bateria')}/> 
      <ButtonMecanica titulo="Cambio de cubiertas" urlimg={require('../assets/cubiertas.png')} onpress={() => navigation.navigate('Cubiertas')}/>  

    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    resizeMode: "contain",
    width: "100%",
    height: "30%"    
  },
  title:{
    fontSize:20,
    marginTop: "10%"
  },
  optioncontainer:{
    width: '100%', 
    alignItems: 'center',
    justifyContent: 'center', 
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: "10%"
  }
});
