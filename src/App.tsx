// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './components/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';





export default function App() {
  return (
    
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
    
  );
}