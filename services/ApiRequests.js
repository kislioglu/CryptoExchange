import {useContext, useEffect, useState} from 'react';
import {LanguageAndCurrencyContext} from '../src/HomeScreen/Header/LanguageAndCurrencySelector/LanguageAndCurrencyContext';

export default function CryptoRequest(selectedCoinId) {
  const [coinData, setCoinData] = useState(null);
  const {selectedCurrency} = useContext(LanguageAndCurrencyContext);
  const [isCoinFound, setIsCoinFound] = useState(false);

  useEffect(() => {
    let currentPage = 1;
    const maxPages = 60;

    const fetchCoinData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-UAibsDpoq8yY5yjDzrVK2ZxS',
        },
      };

      while (!isCoinFound && currentPage <= maxPages) {
        try {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${selectedCurrency}&per_page=250&page=${currentPage}&sparkline=true`,
            options,
          );

          if (!response.ok) {
            throw new Error(
              'Network response was not ok ' + response.statusText,
            );
          }

          const data = await response.json();

          const foundCoin = data.find(coin => coin.id === selectedCoinId);

          if (foundCoin) {
            setCoinData(foundCoin);
            setIsCoinFound(true);
            break;
          }

          currentPage++;
        } catch (error) {
          console.error('An error occurred while fetching:', error);
          break;
        }
      }
    };

    fetchCoinData();
  }, [selectedCurrency, selectedCoinId]);

  return coinData;
}
