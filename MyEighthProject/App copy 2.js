import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://cdn.pixabay.com/photo/2019/01/15/00/01/guitar-3933243__340.png' }}
        style={styles.logo} />
      
      <Text style ={styles.insts}> 
        Press the button below to select an image on your phone! 
        </Text>
      <TouchableOpacity
        style={styles.button} onPress={() => alert('You have not selected an image yet!')} >

          <Text style={styles.buttonText}> Pick Image: </Text>

          <Text>Touch Me</Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFE0"
  },

  button: {
    alignItems: 'center',
    backgroundColor: "#778899",
    padding: 10
  },

  insts: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,

  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});
