import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function TrendsRequest() {

  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-UAibsDpoq8yY5yjDzrVK2ZxS',
      },
    };

    fetch('https://api.coingecko.com/api/v3/search/trending', options)
      .then(response => response.json())
      .then(response => setTrends(response))
      .catch(err => console.error(err));
  }, []);
  
  return trends;
}
