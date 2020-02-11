import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
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
        backgroundColor={theme.colors.secondary}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaView style={styles.container}>
            <HomePage />
          </SafeAreaView>
        </ThemeProvider>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
  },
});

export default App;
