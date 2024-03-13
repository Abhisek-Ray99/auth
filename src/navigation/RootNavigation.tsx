import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SCREEN from '../screens';
import ROUTES from './route';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name={ROUTES.ONBOARD} component={SCREEN.OnboardingScreen} />
      <Stack.Screen name={ROUTES.AUTH} component={SCREEN.AuthScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigation