# Learn React Native

JDK 17 to 20 is required
Note: Open MyAppName.xcworkspace instead of MyAppName.xcodeproj in xcode to run app

## Initial Setup

```bash
# Set jdk
sdk default java 17.0.0-tem

# Check if all is well
npx react-native doctor

# Create new react-native app
npx @react-native-community/cli@latest init yourAppName
```

## Run App

```bash
npm run start
npm start -- --reset-cache
npm run android
```

## Adding Navigation and Bottom Tabs

```bash
npm install react-native-screens react-native-safe-area-context @react-navigation/native

# For stack navigation
npm install @react-navigation/native-stack

# For bottom navigation tabs
npm install @react-navigation/bottom-tabs

# for iOS
npx pod-install ios
```

## MainActivity setup

```kotlin
// Add imports
import android.os.Bundle;

// Place the following code to the body of MainActivity
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
```
