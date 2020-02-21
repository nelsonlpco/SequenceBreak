import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/home";
import ConfigureSequence from "../screens/configure-sequence";

type EnumLiteralsOf<T extends object> = T[keyof T];

export const routes = {
  HOME: "home" as "home",
  CONFIGURE: "configure" as "configure"
};

export type Routes = EnumLiteralsOf<typeof routes>;

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.HOME}
          component={HomeScreen}
          options={{
            headerTitle: "",
            headerTransparent: true
          }}
        />
        <Stack.Screen
          name={routes.CONFIGURE}
          component={ConfigureSequence}
          options={{
            headerTitle: "",
            headerTransparent: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
