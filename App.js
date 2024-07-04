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
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{headerShown: false}}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'black',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});
