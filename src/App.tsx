import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './navigation/HomeNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './components/Theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
