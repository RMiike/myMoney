import React, { useState,AsyncStorage } from "react"
import { Platform } from 'react-native'
import { Background, Container, Logo, SubmitButton, SubmitText, AreaInput, Input, SignUpLink, SignUpText } from './styles'
import firebase from '../../Services/firebase'

import logoImg from '../../Assets/Images/logo.png'

export default function SignIn({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


 async function handleLogin(){
    if(email && password){
      await firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error)=> {
        if(error.code === 'auth/invalid-email'){
          alert('Email inválido.')
        } else if(error.code === 'auth/user-not-found'){
          alert('Usuário ou senha inválidos.')

        }else if(error.code === 'auth/wrong-password'){
          alert('Usuário ou senha inválidos.')
        }
        else{
          alert(error.code)
        }
      })
    }else{
      alert('Campos obrigatórios.')
    }
  }
  return (
    <Background >
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Logo source={logoImg} />

        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={(email)=>{setEmail(email)}}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={password}
            onChangeText={(password)=>{setPassword(password)}}
          />
        </AreaInput>
        <SubmitButton
          onPress={handleLogin}
        >
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <SignUpLink
          onPress={()=>{navigation.navigate('SignUp')}}
        >
          <SignUpText>Criar conta gratuita.</SignUpText>
        </SignUpLink>
      </Container>
    </Background>
  )
}
