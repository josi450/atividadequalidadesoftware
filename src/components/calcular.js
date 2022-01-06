import React from 'react';
import {
  StyleSheet,
  Text,
  Input,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { useState, useLayoutEffect } from 'react';

export default function App() {
  const [raio, setRaio] = useState();
  const [resultado, setResultado] = useState();

  function calc() {
    const resultado = Math.PI * (raio * raio);
    setResultado(Math.PI * (raio * raio));
  }

  return (
    <View>
      <Text style={styles.titulo}>
        Calculando a área de uma circunferência:
      </Text>
      <Text style={styles.formula}> Fórmula: π * r² </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Informe o raio da circunferência"
        onChangeText={(text) => setRaio(text)}
      />
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => calc()}>
        <Text style={styles.botaoText}>Calcular</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#32CD32',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    margin: 100,
  },
  botaoText: {
    color: 'black',
  },
  resultado: {
    fontSize: 20,
    color: 'black',
    padding: 25,
    textAlign: 'center',
  },
  titulo: {
    fontSize: 18,
    color: '#F0F8FF',
    marginVertical: 10,
  },
  formula: {
    fontSize: 16,
    color: '#8B0000',
    fontStyle: 'italic',
  },
  input: {
    backgroundColor: '#F0F8FF',
    marginVertical: 10,
    padding: 12,
    borderRadius: 10,
    color: 'black',
  },
});
