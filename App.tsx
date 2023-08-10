import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Carrinho from './src/pages/Carrinho/index';

export default function App() {
  return (
    <View>
      <Carrinho/>
      <StatusBar/>
    </View>
  );
}