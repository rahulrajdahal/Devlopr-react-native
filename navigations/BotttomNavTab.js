import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, View } from "react-native";
import { COLORS, icons } from "../constants";
import { Home, Bag } from "../constants/icons";

import { Explore, Friends, Store } from "../screens";
import HomeStackScreen from "./HomeStackScreen";
import StoreScreenStack from "./StoreStackScreen";

const Tab = createBottomTabNavigator();

const BottomNavTab = () => {
  const tabOptions = {
    showLable: false,
    style: {
      maxHeight: 72,
      height: "10%",
      backgroundColor: COLORS.white,
      paddingTop: 8,
      paddingBottom: 34.67,
      paddingLeft: 15.33,
      paddingRight: 10.67,
      elevation: 0,
    },
  };

  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Home
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Bag
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.users}
              style={{ tintColor: focused ? COLORS.primary : COLORS.dark01 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StoreStackScreen"
        component={StoreScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.bag}
              style={{ tintColor: focused ? COLORS.primary : COLORS.dark01 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTab;
