/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Welcome from './src/Welcome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/HomeScreen/home/Home';
import Navigation from './src/Navigation/Navigation';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Navigation />
  );
}


