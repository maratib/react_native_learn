import { Text, View } from 'react-native'
import React, { Component } from 'react'

class HomeScreen extends Component {
  render() {
    return (
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            {/* <Icon name="home" size={50} color="blue" /> */}
      
          </View>
    )
  }
}

export default HomeScreen