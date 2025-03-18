import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Button } from '@react-native-material/core'

class SettingsScreen extends Component {
  render() {
    return (
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Settings Screen</Text>
            <Button title="Button" onPress={() => console.log("Button Clicked1")}/>;
      
          </View>
    )
  }
}

export default SettingsScreen