import React,
        { useEffect, useState, useMemo, useRef}
        from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Home() {

  return (
    <View style={styles.mainContainer}>

<Icon name='home' size={40} color='#333' />
<Icon name='facebook' size={40} color='blue' />
      <Text style={styles.text}>Bem vindo 'nome'</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome'
        onChangeText={() => {}}
      />
      <TouchableOpacity
        style={styles.btnArea}
        onPress={() => {}}
      >
        <Text style={styles.text}>Enviar</Text>
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