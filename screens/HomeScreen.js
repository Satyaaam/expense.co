import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import ButtonClass from '../components/ButtonClass';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {signOut} from 'firebase/auth';
import {auth, tripsRef} from '../config/firebase';
import {useSelector} from 'react-redux';
import {getDocs, query, where} from 'firebase/firestore';

var data = [
  {
    id: 1,
    place: 'Gujrat',
    country: 'India',
  },
  {
    id: 2,
    place: 'Mumbai',
    country: 'India',
  },
  {
    id: 3,
    place: 'Delhi',
    country: 'India',
  },
  {
    id: 4,
    place: 'Pune',
    country: 'India',
  },
  {
    id: 5,
    place: 'Bangalore',
    country: 'India',
  },
  {
    id: 6,
    place: 'Chennai',
    country: 'India',
  },
  {
    id: 7,
    place: 'Hyderabad',
    country: 'India',
  },
  {
    id: 8,
    place: 'Kolkata',
    country: 'India',
  },
  {
    id: 9,
    place: 'Jaipur',
    country: 'India',
  },
  {
    id: 10,
    place: 'Lucknow',
    country: 'India',
  },
  {
    id: 11,
    place: 'Ahmedabad',
    country: 'India',
  },
  {
    id: 12,
    place: 'Chandigarh',
    country: 'India',
  },
  {
    id: 13,
    place: 'Kochi',
    country: 'India',
  },
  {
    id: 14,
    place: 'Bhopal',
    country: 'India',
  },
  {
    id: 15,
    place: 'Indore',
    country: 'India',
  },
  {
    id: 16,
    place: 'Nagpur',
    country: 'India',
  },
  {
    id: 17,
    place: 'Surat',
    country: 'India',
  },
  {
    id: 18,
    place: 'Varanasi',
    country: 'India',
  },
  {
    id: 19,
    place: 'Coimbatore',
    country: 'India',
  },
  {
    id: 20,
    place: 'Patna',
    country: 'India',
  },
];

export default function HomeScreen() {
  const {user} = useSelector(state => state.user);
  const [trips, setTrips] = React.useState([]);
  const isFocused = useIsFocused();

  const fetchTrips = async () => {
    const q = query(tripsRef, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      console.log('document', doc.data());
      data.push({...doc.data(), id: doc.id});
    });
    setTrips(data);
  };

  useEffect(() => {
    if (isFocused) {
      fetchTrips();
    }
  }, [isFocused]);

  const handleLogout = async () => {
    await signOut(auth);
  };
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className={'flex flex-row justify-between items-center'}>
        <Text className={`text-black font-bold text-3xl `}>ExpenseCalc.</Text>
        <TouchableOpacity
          onPress={() => {
            handleLogout();
          }}
          className={'px-2 py-2 shadow-lg rounded-lg bg-white'}>
          <Text className={'font-bold text-xl'}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View
        className={
          'flex justify-center items-center bg-blue-200 my-5 rounded-lg'
        }>
        <Image
          source={require('../assets/images/banner.png')}
          className={'w-60 h-60'}
        />
      </View>
      <View>
        <View className={'flex-row items-center justify-between'}>
          <Text className={'font-bold text-2xl text-black'}>Recent Trips</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddTrip');
            }}
            className={'px-2 py-2 shadow-lg rounded-lg bg-white'}>
            <Text className={'font-bold text-xl'}>Add Trips</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listMap}>
          <FlatList
            className={'mt-3'}
            data={trips}
            ListEmptyComponent={<EmptyList message={'No Trips Found'} />}
            numColumns={2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('TripExpenses', {...item});
                  }}
                  className={'bg-white rounded-lg mb-6 p-3'}>
                  <View>
                    <Image source={randomImage()} className={'w-40 h-40'} />
                    <Text className={'text-gray-700 font-bold text-xl'}>
                      {item.place}
                    </Text>
                    <Text className={'text-gray-600 font-semibold'}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  listMap: {
    height: 430,
    paddingTop: 40,
  },
});
