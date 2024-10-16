import React from 'react';
import Welcome from '../Welcome';
import Home from '../HomeScreen/home/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from '../Login_Signup/Signup.js';
import SignIn from '../Login_Signup/SignIn';
import ForgotPassword from '../Login_Signup/ForgotPassword';
import TodaysTrendCurrencyPrices from '../CryptoCurrency/TodaysTrendCurrencyPrices';
import CoinFirstLookInformations from '../CoinCurrencyGraphic/CoinFirstLookInformations';
import ContactUsContent from '../HomeScreen/ContactUs/ContactUsContent';
import BankDeposit from '../HomeScreen/HamburgerMenu/DepositTypes/BankDeposit';
import Header from '../HomeScreen/Header/Header';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
          contentStyle: {backgroundColor: '#fff'},
        }}
        initialRouteName="Welcome">
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
        <Stack.Screen name="ContactUsContent" component={ContactUsContent} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="TodaysTrendCurrencyPrices"
          component={TodaysTrendCurrencyPrices}
        />
        <Stack.Screen
          name="CoinFirstLookInformations"
          component={CoinFirstLookInformations}
        />
        <Stack.Screen name="BankDeposit" component={BankDeposit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
