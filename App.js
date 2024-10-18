import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VerSolicitudes from './src/screens/VerSolicitudes';
import VerSolicitud from './src/screens/VerSolicitud';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='VerSolicitudes'
          component={VerSolicitudes}
          options={{
            title: 'Ver solicitudes'
          }}
        />
        <Stack.Screen
          name='VerSolicitud'
          component={VerSolicitud}
          initialParams={{ id: 0 }}
          options={{
            title: 'Ver solicitud'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
