<<<<<<< HEAD:PawsFinder/App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map';

export default function App() {
  return (
    <View style={styles.container}>
      <Map></Map>
      <StatusBar style="auto" />
    </View>
=======
import Tabs from './BottomNavigation/navigation';

export default function App() {
  return (
    <Tabs/>
>>>>>>> 24a4ddfde6c030d025c21d5af2c8c04261df7b2c:PetFinder/App.js
  );
}
