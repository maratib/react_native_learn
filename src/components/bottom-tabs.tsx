import React, {Component} from 'react';
import HomeScreen from '../screens/home-screen';
import SettingsScreen from '../screens/settings-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, SettingsIcon} from 'icons/index';

const Tab = createBottomTabNavigator();

class BottomTabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => <HomeIcon color={color} size={30} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarShowLabel: false,
            tabBarIcon: ({color, size}) => (
              <SettingsIcon color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default BottomTabs;
