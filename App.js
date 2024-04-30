import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useState} from 'react'

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    let suma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(suma);
  }

  const restar = () => {
    let resta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resta);
  }

  const multiplicar = () => {
    let multiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(multiplicacion);
  }

  const dividir = () => {
    if (parseFloat(numero2) === 0) {
      alert("No se puede dividir por cero.");
      return;
    }
    let division = parseFloat(numero1) / parseFloat(numero2);
    setResultado(division);
  }

  const clean = () => {
    setNumero1(0);
    setNumero2(0);
    setResultado(0);
  }

  return (
    <View style={styles.container}>
      <Text>Operaciones con números</Text>
      <Text>Número 1:</Text>
      <TextInput
        placeholder='Número 1'
        value={numero1.toString()}
        onChangeText={text => setNumero1(text)}
        keyboardType='numeric'
      />
      <Text>Número 2:</Text>
      <TextInput
        placeholder='Número 2'
        value={numero2.toString()}
        onChangeText={text => setNumero2(text)}
        keyboardType='numeric'
      />

      <TouchableOpacity
        style={{backgroundColor:'blue', padding:15, marginTop: 10}}
        onPress={sumar}
      >
        <Text style={{color:'#FFF'}}>Sumar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor:'green', padding:15, marginTop: 10}}
        onPress={restar}
      >
        <Text style={{color:'#FFF'}}>Restar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor:'orange', padding:15, marginTop: 10}}
        onPress={multiplicar}
      >
        <Text style={{color:'#FFF'}}>Multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor:'purple', padding:15, marginTop: 10}}
        onPress={dividir}
      >
        <Text style={{color:'#FFF'}}>Dividir</Text>
      </TouchableOpacity>

      <Text style={{color:'red', fontSize:30, marginTop: 20}}>Resultado: {resultado}</Text>

      <TouchableOpacity
        style={{backgroundColor:'red', padding:15, marginTop: 10}}
        onPress={clean}
      >
        <Text style={{color:'#FFF'}}>Limpiar</Text>
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
});
