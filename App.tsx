import {View, Text} from 'react-native';
import React from 'react';
import AppNavigation from './navigation/appNavigation';
import {store} from './redux/store';
import {Provider} from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
