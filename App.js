import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import Calcular from './src/components/calcular';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>
        CALCULADORA
        <AntDesign name="calculator" size={28} color="#F0F8FF" />
      </Text>

      <Calcular />

      <StatusBar barstyle="light-content" backgroundColor="#708090" />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: '#708090',
  },
  header: {
    color: '#F0F8FF',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 15,
  },
});
