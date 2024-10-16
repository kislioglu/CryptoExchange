/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {LanguageAndCurrencyProvider} from './src/HomeScreen/Header/LanguageAndCurrencySelector/LanguageAndCurrencyContext';

export default function App() {
  return (
    <LanguageAndCurrencyProvider>
      <Navigation />
    </LanguageAndCurrencyProvider>
  );
}
