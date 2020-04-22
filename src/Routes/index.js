import React, { useState, useEffect, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ActivityIndicator } from "react-native";
import firebase from "../Services/firebase";

console.disableYellowBox=true
import Icon from 'react-native-vector-icons/MaterialIcons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

import Dashboard from "../Pages/Dashboard";
import New from "../Pages/New";
import Profile from "../Pages/Profile";

export default function index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
 
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoading(true)

      if (user) {
        setTimeout(() => {
          setIsLoading(false);
          setIsLogged(true);

        }, 1000);
      } else {
        setIsLogged(false);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator
        size={40}
        color="#222"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <NavigationContainer>
      {!isLogged ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "#fff",
              style: { backgroundColor: "#1b2c4c", borderTopColor: '#1b2c4c' }
            }}

            screenOptions={{ headerShown: false }}
          >
            <Tab.Screen name="Dashboard" component={Dashboard} options={{
              tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
                <Icon name="equalizer" color={color} size={26} />
              )
            }} />
            <Tab.Screen name="New" component={New} options={{
              tabBarLabel: 'Registro', tabBarIcon: ({ color }) => (
                <Icon name="edit" color={color} size={26} />
              )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
              tabBarLabel: 'Perfil', tabBarIcon: ({ color }) => (
                <Icon name="account-circle" color={color} size={26} />
              )
            }} />
          </Tab.Navigator>
        )}
    </NavigationContainer>
  );
}


