import React from 'react';
import { StyleSheet, Text, Image, TouchableHighlight,View } from 'react-native';

const ButtonMecanica = (props) => {
  const {titulo, urlimg, onpress} = props; 
    return (
    <TouchableHighlight style={styles.touch} onPress={onpress}>  
      <View>
            <Image source={urlimg} style={styles.image} /> 
            <Text style={styles.text}>{titulo}</Text> 
      </View>        
    </TouchableHighlight>
    )
  };

  const styles = StyleSheet.create({
    text:{
      fontSize:10,
      textAlign: 'center'
     },
     touch:{
       width:"30%",
       marginLeft: "3%",
     },
     image: {
       resizeMode: "contain",
       width: "70%", 
       height:"40%",
       alignSelf:'center'  
   }
  });

export default ButtonMecanica;