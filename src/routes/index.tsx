import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Constants from "expo-constants";

import HomeScreen from "../screens/home";
import ConfigureSequence from "../screens/configure-sequence";
import { useTheme } from "../hooks/useTheme";
import { paths } from "./paths";

const Stack = createStackNavigator();

export const Navigation = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      backgroundColor: theme.colors.primaryBg,
      marginTop: Constants.statusBarHeight
    }
  });

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={paths.CONFIGURE}
            component={ConfigureSequence}
            options={{
              headerTitle: "",
              headerTransparent: true
            }}
          />
          <Stack.Screen
            name={paths.HOME}
            component={HomeScreen}
            options={{
              headerTitle: "",
              headerTransparent: true
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
