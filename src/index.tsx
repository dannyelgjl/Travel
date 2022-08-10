import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import theme from './styles/theme/theme';

const App = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
