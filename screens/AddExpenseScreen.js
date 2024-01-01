import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {categories} from '../constants';
import Snackbar from 'react-native-snackbar';
import {addDoc} from 'firebase/firestore';
import {expensesRef} from '../config/firebase';
import Loading from '../components/Loading';

export default function AddExpenseScreen(props) {
  const {id} = props.route.params;
  const navigate = useNavigation();
  const [title, setTitle] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleAddExpense = async () => {
    if (title && amount && category) {
      // navigate.goBack();
      setLoading(true);
      let doc = await addDoc(expensesRef, {
        title,
        amount,
        category,
        tripId: id,
      });

      setLoading(false);
      if (doc && doc.id) {
        Snackbar.show({
          text:"Expense Added Successfully",
          backgroundColor: 'green',
        })
        navigate.goBack();
      }
    } else {
      Snackbar.show({
        text: 'Please fill all the fields',
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
            Add Expense
          </Text>
        </View>
      </View>
      <View className={'justify-center mt-5 flex items-center'}>
        <Image
          source={require('../assets/images/expenseBanner.png')}
          className={'h-72 w-72'}
        />
      </View>

      <View>
        <Text style={{fontSize: 22}} className="text-gray-700 font-bold">
          Title
        </Text>
        <TextInput
          onChangeText={text => {
            setTitle(text);
          }}
          style={{fontSize: 18}}
          className={'p-3 font-semibold bg-white rounded-lg mb-3 mt-2'}
          placeholder="Enter Title"
        />
        <Text style={{fontSize: 22}} className="text-gray-700 font-bold">
          Amount
        </Text>
        <TextInput
          onChangeText={text => {
            setAmount(text);
          }}
          style={{fontSize: 18}}
          className={'p-3 font-semibold bg-white rounded-lg mb-3 mt-2'}
          placeholder="Enter Amount"
        />
      </View>
      <View>
        <Text style={{fontSize: 22}} className="text-gray-700 font-bold mb-2">
          Title
        </Text>
        <View className={'flex-row flex-wrap gap-3'}>
          {categories.map(cat => {
            let bgColor = 'bg-white';
            if (category === cat.value) {
              bgColor = 'bg-green-200';
            }
            return (
              <TouchableOpacity
                onPress={() => {
                  setCategory(cat.value);
                }}
                key={cat.value}
                // style={{backgroundColor: bgColor}}
                className={`rounded-full ${bgColor} px-4 py-2`}>
                <Text>{cat.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View className={''}>
        {loading ? (
          <Loading />
        ) : (
          <TouchableOpacity
            onPress={() => {
              handleAddExpense();
            }}
            className={'my-6 bg-green-500 rounded-full p-3 shadow-sm mx-2'}>
            <Text className={'text-white font-bold text-xl text-center'}>
              Add Trip
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View></View>
    </ScreenWrapper>
  );
}
