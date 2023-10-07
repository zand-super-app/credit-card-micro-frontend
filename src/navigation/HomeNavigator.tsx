import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import BasicDetailsScreen from '../screens/onboarding/BasicDetailsScreen';
import NavBar from '../components/NavBar';
import {View} from 'react-native';
import OTPScreen from '../screens/onboarding/OTPScreen';

export type HomeStackParamList = {
  Welcome: undefined;
  BasicDetails: undefined;
  OTPEntry: undefined;
};

const Home = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
      }}>
      <Home.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Home.Screen
        name="BasicDetails"
        component={BasicDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Home.Screen
        name="OTPEntry"
        component={OTPScreen}
        options={{
          headerShown: false,
        }}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;
