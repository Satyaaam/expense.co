import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function ScreenWrapper({children}) {
    let screenBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : Platform.OS === 'ios' ? 30 : 0 ;
    // console.log(screenBarHeight);
  return (
    <View style={{paddingTop:screenBarHeight, paddingHorizontal:10,}}>
        {children}
    </View>
  )
}