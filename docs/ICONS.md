### Adding icons

[Choose Icons](https://icons.expo.fyi/Index)  
[Or from here](http://oblador.github.io/react-native-vector-icons)

```javascript
// create react-native.config.js
module.exports = {
  assets: ['./node_modules/react-native-vector-icons/Fonts'],
};
```

```bash
npm i react-native-vector-icons

npx react-native-asset
# Error on ios open the project in xcode and remove all iconFonts from Target Copy Resources
npx pod-install ios

```

Edit the `android/settings.gradle` file as shown below:

```gradle
rootProject.name = 'MyApp'

include ':app'

+ include ':react-native-vector-icons'
+ project(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')

```

Edit the android/app/build.gradle (located in the app folder) as shown below:

```gradle
apply plugin: 'com.android.application'

android {
  ...
}

dependencies {
  implementation fileTree(dir: "libs", include: ["*.jar"])
  //noinspection GradleDynamicVersion
  implementation "com.facebook.react:react-native:+"  // From node_modules

+ implementation project(':react-native-vector-icons')
}
```

Sample Navigation App with Icons

```javascript
// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Icon name="home" size={50} color="blue" />
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>About Screen</Text>
      <Icon name="home-outline" size={50} color="red" />
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="cancel" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
```
