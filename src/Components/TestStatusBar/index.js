import React,
        { useEffect, useState, useMemo, useRef}
        from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar} from 'react-native'
import { Container, Titulo } from '../../Components/TestStyled/styles'


export default function Home() {

  return (
    <Container >
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}

      />
      <Titulo>Olás</Titulo>
    </Container>
  )
}
