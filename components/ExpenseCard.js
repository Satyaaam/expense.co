import {View, Text} from 'react-native';
import React from 'react';
import {categoryBG} from '../theme';

export default function ExpenseCard({item}) {
  return (
    <View
      style={{backgroundColor: categoryBG[item?.category]}}
      className={'flex-row justify-between items-center p-3 mb-3  rounded-2xl'}>
      <View>
        <Text className={'text-gray-800 font-bold text-xl'}>{item.title}</Text>
        <Text className={'text-xs font-semibold'}>{item.category}</Text>
      </View>
      <View>
        <Text className={'text-xl text-black'}>₹ {item.amount}</Text>
      </View>
    </View>
  );
}
