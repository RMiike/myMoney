import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styled.container}>
      
      <Text>Olás</Text>
    </View>
  );
}

const styled = StyleSheet.create({
 container :{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
 },
 title: {
  color: '#fff',
  fontSize: 33
 }
})