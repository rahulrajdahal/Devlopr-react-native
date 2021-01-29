import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Home, Article, Challenge } from "../screens";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Article"
        component={Article}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Challenge"
        component={Challenge}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
