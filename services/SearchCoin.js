import {useEffect, useState} from 'react';

export default function SearchCoin({coinName}) {
  const [searchedCoin, setSearchedCoin] = useState(null);

  useEffect(() => {
    const fetchSearchCoin = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-UAibsDpoq8yY5yjDzrVK2ZxS',
        },
      };

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/search?query=${coinName}`,
          options,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setSearchedCoin(data);
      } catch (error) {
        console.error('An error occurred while fetching:', error);
      }
    };

    fetchSearchCoin();
  }, []);

  return searchedCoin;
}
