import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const csuLogo = {
  uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-1024x1024.jpg",
  width:80,
  hieght: 80
}

  return (
    <View style={styles.container}>
    
      <Image 
        style={styles.localCSULogo}
        source={require('./assets/logo.jpg')}
      />

      <Image 

        style={styles.urlCSULogo}
        source={{
          uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-375-1024x1024.jpg"

        }}
      />

        <Image 
        style={styles.stretchLogo}
        source={csuLogo}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50,
    height: 50
  },

  stretchLogo: {

    height: 200,
    resizeMode: 'center',
  }

});
