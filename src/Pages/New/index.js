import React, { useState } from 'react'
import { Keyboard, Picker, Alert } from 'react-native'
import { Background, SubmitButton, SubmitText, Input, PickerItem } from './styles'
import firebase from '../../Services/firebase'


export default function New({navigation}) {
  const [valor, setValor] = useState('')
  const [tipo, setTipo] = useState('Receita')

  function handleSubmit() {
    Keyboard.dismiss()
    if (isNaN(parseFloat(valor))) {
      alert('Preencha todos os campos.')
      return
    } else {
      Alert.alert(
        'Confirmar dados',
        `Tipo ${tipo} - Valor ${parseFloat(valor)}`,
        [{
          text: 'Cancelar',
          style: 'cancel'
        },{
          text: 'Contiuar',
          onPress: () => handleAdd()
        }]

      )
    }
  }

  async function handleAdd(){
    let uid = firebase.auth().currentUser.uid
    let historico = firebase.database().ref('historico').child(uid)
    let key = historico.push().key 
    
    await historico.child(key).set({
      tipo,
      valor: parseFloat(valor),
      date: new Date().toLocaleDateString()
    });
    

    let user = firebase.database().ref('users').child(uid)
    await user.once('value').then((s)=> {
      let saldo = parseFloat(s.val().saldo)
      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor)
      user.child('saldo').set(saldo)      
    })
    setValor('')
    Keyboard.dismiss()
    navigation.navigate('Dashboard')

  }

  return (
    <Background>
      <Input
        placeholder='Valor desejado'
        keyboardType='numeric'
        value={valor}
        onChangeText={(valor) => { setValor(valor) }}
        returnKeyType='next'
        onSubmitEditing={() => Keyboard.dismiss()}
      />
      <PickerItem
        selectedValue={tipo}
        onValueChange={(val, index) => {
          setTipo(val)
        }}
      >
        <Picker.Item
          label='Receita'
          value='receita'
        />
        <Picker.Item
          label='Despesa'
          value='despesa'
        />
      </PickerItem>
      <SubmitButton
        onPress={() => handleSubmit()}
      >
        <SubmitText>Registrar</SubmitText>
      </SubmitButton>
    </Background>
  )
}
