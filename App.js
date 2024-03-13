import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from "expo-font";

import RootNavigation from './src/navigation/RootNavigation';

export default function App() {

  const [fontsLoaded] = useFonts({
    GTBold: require("./assets/fonts/GT-Super-Text-Bold-Trial.otf"),
    GTMedium: require("./assets/fonts/GT-Super-Text-Medium-Trial.otf"),
    GTRegular: require("./assets/fonts/GT-Super-Text-Regular-Trial.otf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
}