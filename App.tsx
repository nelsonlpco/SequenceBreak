import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "./src/styles/themes/dark";
import { configureStore } from "./src/store";

import { Navigation } from "./src/routes";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={darkTheme}>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
