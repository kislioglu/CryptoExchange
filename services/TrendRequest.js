import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function TrendsRequest() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchTrends = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-UAibsDpoq8yY5yjDzrVK2ZxS',
        },
      };

      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/search/trending',
          options,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setTrends(data);
      } catch (error) {
        console.error('An error occurred while fetching:', error);
      }
    };
    fetchTrends();
  }, []);
  return trends;
}
