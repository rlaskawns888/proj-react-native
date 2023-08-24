import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/** 리액트기초 | https://reactnative.dev/docs/intro-react?language=javascript  */
// import Cat from './components/sample/Cat';
// import Cafe from './components/sample/Cafe';
// import Hungry from './components/sample/02.Hungry';

/** 텍스트 입력 처리 | https://reactnative.dev/docs/handling-text-input */
// import Pizza from './components/sample/03.Pizza';

/** Scroll View | https://reactnative.dev/docs/using-a-scrollview */
import Logo from './components/sample/04.Logo';

/** FlatList | https://reactnative.dev/docs/using-a-listview  */
import FlatListBasics from './components/sample/05.FlatList';
import SectionListBasics from './components/sample/06.SectionList';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World!!!</Text> */}

      <SectionListBasics />

      {/* <FlatListBasics/> */}
      {/* <Logo /> */}
      {/* <Pizza /> */}
      {/* <Hungry /> */}
      {/* <Cafe /> */}
      {/* <Cat /> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
