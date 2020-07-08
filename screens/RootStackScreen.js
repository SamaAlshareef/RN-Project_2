import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import FPScreen from './FPScreen';
import FPConfirmationScreen from './FPConfirmationScreen';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    
      <Drawer.Navigator 
      drawerPosition='right'
      drawerType='front'
      drawerStyle={{
        backgroundColor: '#f1f8ff',
      }}
      drawerContentOptions={{
        activeTintColor: '#7787fc',
        inactiveTintColor:'#7787fc'
      }}>
       
        <Drawer.Screen name="SignInScreen" component={SignInScreen}
          options={{
            headerTitle:'Sign in',headerTitleAlign:'center',
        }}/>
        <Drawer.Screen name="SignUpScreen" component={SignUpScreen}
         options={{
          headerTitle:'Sign up',headerTitleAlign:'center',
      }}/>
        <Drawer.Screen name="ForgetPassword" component={FPScreen}/>
        <Drawer.Screen name="PasswordConfirmation" component={FPConfirmationScreen}/>
      </Drawer.Navigator>
     
  );
}
const Stack = createStackNavigator();

const RootScreen =({navigation})=> (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen name="SignInScreen" component={SignInScreen} 
            options={{
                headerTitle:'Sign in',headerTitleAlign:'center',
                 headerStyle:{backgroundColor:"#f1f8ff", elevation:0},
                 headerTintColor:"#193870",  
                headerRight: () => (
                <TouchableOpacity>
                    <Image source={require('../images/hm-menu.png')} style={{height:40, width:40, marginRight:5,}} />
                </TouchableOpacity> 
          ),  
                }} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen}
            options={{
                headerTitle:'Sign up',headerTitleAlign:'center',
                 headerStyle:{backgroundColor:"#f1f8ff", elevation:0},
                 headerTintColor:"#193870",
                 headerRight: () => (
                  <TouchableOpacity>
                      <Image source={require('../images/hm-menu.png')} style={{height:40, width:40, marginRight:5,}} />
                  </TouchableOpacity>), }} />
            <Stack.Screen name="FPScreen" component={FPScreen} 
            options={{
                headerTitle:'Forgot Password',headerTitleAlign:'center',
                 headerStyle:{backgroundColor:"#f1f8ff", elevation:0},
                 headerTintColor:"#193870",
                 headerRight: () => (
                  <TouchableOpacity>
                      <Image source={require('../images/hm-menu.png')} style={{height:40, width:40, marginRight:5,}} />
                  </TouchableOpacity>), }} />
            <Stack.Screen name="FPConfirmationScreen" component={FPConfirmationScreen} 
             options={{
                headerTitle:'Forgot Password',headerTitleAlign:'center',
                 headerStyle:{backgroundColor:"#f1f8ff", elevation:0},
                 headerTintColor:"#193870",
                 headerRight: () => (
                  <TouchableOpacity>
                      <Image source={require('../images/hm-menu.png')} style={{height:40, width:40, marginRight:5,}} />
                  </TouchableOpacity> ),}} />
        </Stack.Navigator>
);
export default RootScreen;
  