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
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          options={{headerShown: false}}
          name="ContactUsContent"
          component={ContactUsContent}
        />
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
          options={{headerShown: false}}
          name="TodaysTrendCurrencyPrices"
          component={TodaysTrendCurrencyPrices}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CoinFirstLookInformations"
          component={CoinFirstLookInformations}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BankDeposit"
          component={BankDeposit} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
