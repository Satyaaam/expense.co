import {View, Text, Image} from 'react-native';
import React from 'react';

export default function EmptyList({message}) {
  return (
    <View className={'flex items-center justify-center mt-5'}>
      <Image
        source={require('../assets/images/empty.png')}
        className={'h-36 w-36'}
      />
      <Text className={'text-xl font-semibold tracking-wider'}>
        {message || 'No Data Found'}
      </Text>
    </View>
  );
}
