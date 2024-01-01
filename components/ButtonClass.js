import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ButtonClass({children, colo}) {
  return (
    <TouchableOpacity className={`px-2 py-2 shadow-lg text-${textColor} rounded-lg bg-white`}>
      <Text className={'font-bold text-xl'}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
