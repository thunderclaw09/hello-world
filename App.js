import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 300 }} /> 
      {/* <Text>Hello world!</Text> */}
      <Text style={{color: '#089', fontSize: 30}}>Cammy and Pebby are cute!</Text>
      <Text style={{color: '#888', fontSize: 18}}>So is the screaming hamster above.</Text>
      <Text style={{color: '#889', fontSize: 18}}>            </Text>


      <TouchableOpacity onPress={() => alert('Yay! You pressed me!')} style={styles.button}>
        <Text style={styles.buttonText}>button</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
