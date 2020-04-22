import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Background, Title, Nome, LogoutButton, LogoutText } from './styles'
import firebase from '../../Services/firebase'

export default function Profile() {
  function handleLogout(){
    firebase.auth().signOut()
  }
  const [nome, setNome] = useState()

  useEffect(()=>{
    let uid = firebase.auth().currentUser.uid

    async function featchName(){
      await firebase.database().ref('users').child(uid).once('value')
            .then((s) => {
              setNome(s.val().nome)
            })
    }
    featchName()
  },[])

  return (
    <Background>
      <Title>Bem vindo(a)</Title>
      <Nome>{nome}</Nome>
      <LogoutButton
        onPress={handleLogout}
      >
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Background>
  )
}
