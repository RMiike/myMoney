import React,
        { useEffect, useState, useMemo, useRef}
        from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage'


export default function Home() {
  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')
  const nomeInput = useRef()
  
  const qtLetras = useMemo(()=> {
    return nome.length
  },[nome])
  
  
  function changeName(){
    setNome(input)
    setInput('')
  }
  function novoNome(){
    nomeInput.current.focus()
  }

  useEffect(()=>{
    async function getStorage(){
      // const nomeStorage = await AsyncStorage.getItem('nomes')
      // if(nomeStorage){
      //   setNome(nomeStorage)
      // }
    }
    getStorage()
  }, [])

  useEffect(()=>{
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome)
    }
    saveStorage()
  }, [])

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Bem vindo {nome}</Text>
      <Text style={styles.text}>Seu nome tem {qtLetras} de letras</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome'
        value={input}
        onChangeText={(text) => setInput(text)}
        ref={nomeInput}
      />
      <TouchableOpacity
        style={styles.btnArea}
        onPress={changeName}
      >
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnArea}
        onPress={novoNome}
      >
        <Text style={styles.text}>Novo nome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },

  input: {
    height: 40,
    fontSize: 30,
    borderWidth: 1,
    margin: 10,
    borderColor: '#222',
    textAlign: 'center'
  },
  text:{
    fontSize: 25,
    color: '#999',
    margin: 15,
    textAlign: 'center'

  },
  btnArea: {
    height: 40,
    borderWidth: 1,
    margin: 10,
    borderColor: '#222',
    justifyContent: 'center'
  }
})