import React from 'react';
import { Text } from 'react-native';
export default function MyApp() {

  function getFullName(fname, mname, lname) {
    return fname + " " + mname + " " + lname;
  }

  const pet = "Dog";
  return (
        <Text>
        {"\n\n\n\n\n\n"}
        Hello I am a student in CIS340!
        My full name is {getFullName("Marcus","Alexander","Burton")} {".\n"}
        I have a {pet}!
    </Text>
  );
}