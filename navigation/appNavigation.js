import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTripScreen from '../screens/AddTripScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {useDispatch, useSelector} from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { setUser } from '../redux/slices/userSlice';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  onAuthStateChanged(auth,(user)=>{
    // console.log("got user",user);
    dispatch(setUser(user));
  })

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AddTrip"
            component={AddTripScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TripExpenses"
            component={TripExpensesScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
