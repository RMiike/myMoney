import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function Home() {
  return (
    <View style={styled.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Text>Olás</Text>
    </View>
  );
}

const styled = StyleSheet.create({
 container :{
  backgroundColor: '#222',
  flex: 1
 }
})