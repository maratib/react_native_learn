import React, { Component } from 'react'
import HomeScreen from '../screens/home-screen';
import SettingsScreen from '../screens/settings-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class BottomTabs extends Component {
  render() {
    return (
     <Tab.Navigator>
           <Tab.Screen name="Home" component={HomeScreen} options={{
             tabBarLabel: "Home"
           }} />
           <Tab.Screen name="Settings" component={SettingsScreen} options={{
             tabBarLabel: "Settings"
           }}/>
         </Tab.Navigator>
       );
  }
}

export default BottomTabs