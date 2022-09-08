import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoLogInScreen from './src/screens/MemoLogInScreen';
import MemoSignUpScreen from './src/screens/MemoSignUpScreen';

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
