import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { AppBar, Button } from '@react-native-material/core'
import MyAppBar from 'components/app-bar'


function SettingsScreen() {
  
    return (
      
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* <MyAppBar /> */}

        
            <Text>Settings Screen</Text>
            <Button title="Button"  onPress={() => console.log("Button Clicked1")}/>
     
          </View>
    )
  
}

export default SettingsScreen