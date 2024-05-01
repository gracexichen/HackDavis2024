import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map';

export default function App() {
  return (
    <View>
      <Map></Map>
      <StatusBar style="auto" />
    </View>
  );
}
