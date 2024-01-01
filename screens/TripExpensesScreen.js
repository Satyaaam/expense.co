import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import EmptyList from '../components/EmptyList';
import randomImage from '../assets/images/randomImage';
import ExpenseCard from '../components/ExpenseCard';
import {useSelector} from 'react-redux';
import {getDoc, getDocs, query, where} from 'firebase/firestore';
import {expensesRef} from '../config/firebase';

export default function TripExpensesScreen(props) {
  // console.log('props', props);
  const {id, place, country} = props.route.params;
  const navigate = useNavigation();
  // const {user} = useSelector(state=>state.user);

  const isFocused = useIsFocused();
  const [expenses, setExpenses] = React.useState([]);

  const fetchExpense = async () => {
    const q = query(expensesRef, where('tripId', '==', id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach(doc => {
      data.push({...doc.data(), id: doc.id});
    });
    setExpenses(data);
  };

  useEffect(() => {
    if (isFocused) {
      fetchExpense();
    }
  }, [isFocused]);

  return (
    <ScreenWrapper>
      <View className="flex-row relative  justify-center">
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
            {place}
          </Text>
          <Text className="text-xl text-center text-black">{country}</Text>
        </View>
      </View>
      <View className={'justify-center mt-5 flex items-center'}>
        <Image
          source={require('../assets/images/7.png')}
          className={'h-72 w-72'}
        />
      </View>
      <View className={'flex-row items-center justify-between'}>
        <Text className={'font-bold text-2xl text-black'}>Expenses</Text>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate('AddExpense', {id, place, country});
          }}
          className={'px-2 py-2 shadow-lg rounded-lg bg-white'}>
          <Text className={'font-bold text-xl'}>Add Expenses</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 430, paddingBottom: 40}}>
        <FlatList
          className={'mt-3'}
          data={expenses}
          ListEmptyComponent={<EmptyList message={'No Trips Found'} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return <ExpenseCard item={item} />;
          }}
        />
      </View>
    </ScreenWrapper>
  );
}
