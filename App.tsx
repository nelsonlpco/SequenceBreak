import React from "react";
import { StatusBar, Platform, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Constants from "expo-constants";

import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./src/styles/themes/dark";
import { configureStore } from "./src/store";

import { Navigation } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Provider store={configureStore()}>
        <ThemeProvider theme={darkTheme}>
          <Navigation />
        </ThemeProvider>
      </Provider>
    </>
  );
}
