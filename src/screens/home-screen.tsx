import {Text, View} from 'react-native';
import React, {Component} from 'react';

import {BowerIcon, HomeIcon} from 'icons/index';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <HomeIcon size={100} color="green" />
        <BowerIcon size={100} />
      </View>
    );
  }
}

export default HomeScreen;
