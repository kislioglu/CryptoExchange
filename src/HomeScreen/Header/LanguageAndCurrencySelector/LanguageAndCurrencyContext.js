import React, {createContext, useState} from 'react';

export const LanguageAndCurrencyContext = createContext();

export function LanguageAndCurrencyProvider({children}) {
  const [selectedLanguage, setSelectedLanguage] = useState('US');
  const [selectedCurrency, setSelectedCurrency] = useState('btc');

  return (
    <LanguageAndCurrencyContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        selectedCurrency,
        setSelectedCurrency,
      }}>
      {children}
    </LanguageAndCurrencyContext.Provider>
  );
}
