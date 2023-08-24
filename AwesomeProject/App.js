import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './components/sample/Cat';
import Cafe from './components/sample/Cafe';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      
      {/* <Cat /> */}
      <Cafe />

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
});
