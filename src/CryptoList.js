import {View, Text, FlatList} from 'react-native';
import React from 'react';
import CryptoRequest from '../services/apiRequests';

export default function CryptoList() {
  const coinData = CryptoRequest();
  return (
    <View>
      <FlatList
        data={coinData}
        renderItem={({item}) => <FlatListData item={item} />}
      />
    </View>
  );
}

const FlatListData = props => {
  return (
    <View>
      <Text>{props.item.name}</Text>
    </View>
  );
};
