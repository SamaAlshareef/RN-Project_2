/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootScreen from './screens/RootStackScreen';



const App = ({navigation}) => {
  return (
    <NavigationContainer>
         <RootScreen/>
    </NavigationContainer>
   
  );
};



export default App;
