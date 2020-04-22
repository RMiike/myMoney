import React, {useEffect, useState} from 'react'
import {ActivityIndicator} from 'react-native' 
import firebase from '../../Services/firebase'
import {Background, Container} from './styles'


export default function Preload({navigation}) {
  const [logged, setLogged] = useState(false)
 
  
  return (
    <Background>
      <Container>
      <ActivityIndicator size={50} color='#fff'/>
      </Container>
    </Background>
  )
}
