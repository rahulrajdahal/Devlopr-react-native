import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {
  Article,
  Login,
  Select,
  SelectCountry,
  SelectInterests,
} from "./screens/";
import { BottomNavTab } from "./components";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen
          name="Select"
          component={Select}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SelectCountry"
          component={SelectCountry}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectInterests"
          component={SelectInterests}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNavTab"
          component={BottomNavTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
