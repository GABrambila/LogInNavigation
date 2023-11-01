import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.js';
import NameScreen from './src/screens/Auth/NameScreen.js';
import DocumentScreen from './src/screens/Auth/DocumentScreen.js';
import UserDataScreen from './src/screens/Auth/UserDataScreen.js';
import TeamScreen from './src/screens/TeamScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NameScreen" component={NameScreen} />
        <Stack.Screen name="DocumentScreen" component={DocumentScreen} />
        <Stack.Screen name="UserDataScreen" component={UserDataScreen} />
        <Stack.Screen name="TeamScreen" component={TeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
