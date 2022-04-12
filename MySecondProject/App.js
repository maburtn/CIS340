import React from 'react';
import { Text, TextInput, View } from 'react-native';
function MyApp() {

  return (
        <Text>
        {"\n\n\n\n\n\n"}
        Hello I am a student in CIS340!
    </Text>
  );
}

export default function MultiComp(){
return (
  <View style={{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  }}>
    <Text> {"\n\n\n\n\n"} </Text>
    <MyApp />
    <MyApp />
    <MyApp />
    <MyApp />
  </View> 
)

}