import React from 'react';
import { Text, View, Image } from 'react-native';

export default function DogApp() {
  let pic = {
    uri: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-03/black-lab-favorite-dog-main-220315-e8e0ee.jpg'};

return (
  <View style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Image source={pic}
    style={{width: 200, height: 200}}
    />
    <Text> Hello, here is your dog! </Text>
  </View>
);
}
