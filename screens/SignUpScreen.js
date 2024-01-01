import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLoading} from '../redux/slices/userSlice';
import Loading from '../components/Loading';

export default function SignUpScreen() {
  const navigate = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {userLoading} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (email && password) {
      // navigate.navigate("Home");
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (e) {
        dispatch(setUserLoading(false));
        Snackbar.show({
          text: e.message,
          backgroundColor: 'red',
        });
      }
    } else {
      Snackbar.show({
        text: 'All Fields are required',
        backgroundColor: 'red',
      });
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex-row relative items-center justify-center">
        <View className="absolute left-0">
          <TouchableOpacity
            className={'px-2 py-2 shadow-lg rounded-lg bg-white'}
            style={{width: 65}}
            onPress={() => navigate.goBack()}>
            <Text className="text-xl font-bold">Back</Text>
          </TouchableOpacity>
        </View>
        <View className="text-center">
          <Text className="text-3xl text-center text-black font-bold">
            Sign Up
          </Text>
        </View>
      </View>
      <View className={'justify-center mt-5 flex items-center'}>
        <Image
          source={require('../assets/images/signup.png')}
          className={'h-72 w-72'}
        />
      </View>

      <View>
        <Text style={{fontSize: 22}} className="text-gray-700 font-bold">
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          style={{fontSize: 18}}
          className={'p-3 font-semibold bg-white rounded-lg mb-3 mt-2'}
          placeholder="Enter Email"
        />
        <Text style={{fontSize: 22}} className="text-gray-700 font-bold">
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          style={{fontSize: 18}}
          secureTextEntry={true}
          // passwordRules={true}
          className={'p-3 font-semibold bg-white rounded-lg mb-3 mt-2'}
          placeholder="Enter Password"
        />
      </View>

      <View className={''}>
        {userLoading ? (
          <Loading />
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
            className={'my-6 bg-green-500 rounded-full p-3 shadow-sm mx-2'}>
            <Text className={'text-white font-bold text-xl text-center'}>
              Sign Up
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View></View>
    </ScreenWrapper>
  );
}
