import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/home/intex";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./src/styles/themes/dark";
import { configureStore } from "./src/store";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={darkTheme}>
        <HomeScreen></HomeScreen>
      </ThemeProvider>
    </Provider>
  );
}
