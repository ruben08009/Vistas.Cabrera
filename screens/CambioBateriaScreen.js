import React from 'react';
import { StyleSheet, Text, TouchableHighlight,Image, View } from 'react-native';

export default function CambioBateriaScreen({ navigation }) {
  return (
    <View style={styles.container} >
    <TouchableHighlight style={styles.touch}  onPress={() => navigation.navigate('Home')}>  
    <View>
          <Image source={require('../assets/bateria.png')} style={styles.image} /> 
          <Text style={styles.text} >Pagina en construcción... Volver al inicio</Text> 
    </View>        
  </TouchableHighlight>
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
  text:{
    fontSize:10,
    textAlign:'center'
   },
   optioncontainer:{
     width: '100%', 
     alignItems: 'center',
     justifyContent: 'center', 
     flexDirection: 'row',
     flexWrap: 'wrap',
     marginTop: "10%"
 
   },
   touch:{
     width:"30%",
     height:"20%",
     marginLeft: "3%",
     
   },
   image: {
     resizeMode: "contain",
     width: "70%", 
     height:"70%",
     alignSelf:'center'  
 }
});
