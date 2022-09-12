import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from 'firebase';

import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoLogInScreen from './src/screens/MemoLogInScreen';
import MemoSignUpScreen from './src/screens/MemoSignUpScreen';
import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="List" component={MemoListScreen} />
        <Stack.Screen name="Detail" component={MemoDetailScreen} />
        <Stack.Screen name="Create" component={MemoCreateScreen} />
        <Stack.Screen name="Edit" component={MemoEditScreen} />
        <Stack.Screen
          name="LogIn"
          component={MemoLogInScreen}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }}
        />
        <Stack.Screen
          name="SignUp"
          component={MemoSignUpScreen}
          options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
