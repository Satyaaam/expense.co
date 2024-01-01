import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {addDoc} from 'firebase/firestore';
import {tripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';
import Loading from '../components/Loading';

export default function AddTripScreen() {
  const navigate = useNavigation();
  const [place, setPlace] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(state => state.user);

  const handleAddTrip = async () => {
    if (place && country) {
      // navigate.goBack();
      setLoading(true);
      let doc = await addDoc(tripsRef, {
        place,
        country,
        userId: user.uid,
      });
      setLoading(false);
      if (doc && doc.id) {
        navigate.goBack();
      }
    } else {
      alert('Please fill all the fields');
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
            Add Trip
          </Text>
        </View>
      </View>
      <View className={'justify-center mt-5 flex items-center'}>
        <Image
          source={require('../assets/images/11.png')}
          className={'h-72 w-72'}
        />
      </View>

      <View>
        <Text style={{fontSize: 22}} className="text-gray-700 font-bold">
          Where on Earth?
        </Text>
        <TextInput
          onChangeText={text => {
            setPlace(text);
          }}
          style={{fontSize: 18}}
          className={'p-3 font-semibold bg-white rounded-lg mb-3 mt-2'}
          placeholder="Enter place"
        />
        <Text style={{fontSize: 22}} className="text-gray-700 font-bold">
          Which Country?
        </Text>
        <TextInput
          onChangeText={text => {
            setCountry(text);
          }}
          style={{fontSize: 18}}
          className={'p-3 font-semibold bg-white rounded-lg mb-3 mt-2'}
          placeholder="Enter country"
        />
      </View>

      <View className={''}>
        {loading ? (
          <Loading />
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleAddTrip();
            }}
            className={'my-6 bg-green-500 rounded-full p-3 shadow-sm mx-2'}>
            <Text className={'text-white font-bold text-xl text-center'}>
              Add Trip
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ScreenWrapper>
  );
}
