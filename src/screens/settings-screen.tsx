import { Text, View } from 'react-native'
import React, { Component } from 'react'

class SettingsScreen extends Component {
  render() {
    return (
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Settings Screen</Text>
            {/* <Icon name="home" size={50} color="blue" /> */}
      
          </View>
    )
  }
}

export default SettingsScreen