import {useEffect, useState} from 'react';

export default function CryptoRequest() {
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-UAibsDpoq8yY5yjDzrVK2ZxS'
        }
      };

      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usdper_page=250&sparkline=true', options);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setCoinData(data);
      } catch (error) {
        console.error('An error occurred while fetching:', error);
      }
    };

    fetchCoinData();
    
    const interval = setInterval(fetchCoinData, 45000);

    return () => clearInterval(interval);
  }, []);

  return coinData;
}
