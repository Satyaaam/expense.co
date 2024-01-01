import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View>
        <View className={'flex-grow justify-center mt-10'}>
          <Image
            source={require('../assets/images/12.png')}
            className={'h-96 w-96'}
          />
        </View>
        <View>
          <Text className="text-center font-bold text-4xl mb-10 text-green-400">
            ExpenseCalc.
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            className={'bg-green-500 p-3 rounded-lg'}>
            <Text className="text-white text-center text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            className={'bg-green-500 p-3 rounded-lg mt-4'}>
            <Text className="text-white text-center text-lg font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({});
