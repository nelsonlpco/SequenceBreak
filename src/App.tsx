import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import {ThemeProvider} from 'styled-components/native';

import {theme} from './style/theme';
import HomePage from './pages/home';
import {configureStore} from './store';

const store = configureStore();

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
