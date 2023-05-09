import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Contador } from './src/Contador/Contador';

export default function App() {

  

  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74C271',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
