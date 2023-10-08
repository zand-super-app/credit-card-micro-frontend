import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './navigation/HomeNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './components/Theme';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
