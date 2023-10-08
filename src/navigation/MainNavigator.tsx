import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import BasicDetailsScreen from '../screens/onboarding/BasicDetailsScreen';
import OTPScreen from '../screens/onboarding/OTPScreen';

export type MainStackParamList = {
  Welcome: undefined;
  BasicDetails: undefined;
  OTPEntry: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Main.Screen
        name="BasicDetails"
        component={BasicDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Main.Screen
        name="OTPEntry"
        component={OTPScreen}
        options={{
          headerShown: false,
        }}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;
