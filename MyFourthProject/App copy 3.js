import React from  'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
 uri: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg',
  width: 64,
  height: 64
};

export default MyScrollViewApp = ()  => (

    <ScrollView style={{padding: 40}}>
        <Text style={{fontSize: 80}}> Try to scroll down </Text>
        <Image source={require('./assets/Dog2.jpg')} style={{width: 40, height: 40}} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text style={{fontSize: 80}}> Try to scroll down again, if you like! </Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text style={{fontSize: 80}}> Try to scroll down again! </Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text style={{fontSize: 80}}> Try to scroll down! </Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text style={{fontSize: 80}}> Try to scroll down! </Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Text style={{fontSize: 80}}> React Native Components! </Text>
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
        <Image source={dog} />
    </ScrollView>
  );
