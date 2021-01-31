import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, View } from "react-native";
import { COLORS, icons } from "../constants";

import { Explore, Friends, Store } from "../screens";
import HomeStackScreen from "./HomeStackScreen";
import StoreScreenStack from "./StoreStackScreen";

const Tab = createBottomTabNavigator();

const BottomNavTab = () => {
  const tabOptions = {
    showLable: false,
    style: {
      maxHeight: 72,
      height: "100%",
      backgroundColor: COLORS.white,
      paddingTop: 7,
      paddingBottom: 34.67,
      paddingLeft: 15.33,
      paddingRight: 10.67,
    },
  };

  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen
        name="HomeStackScreen"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Image source={icons.home} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Image source={icons.discovery} />,
        }}
      />
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Image source={icons.users} />,
        }}
      />
      <Tab.Screen
        name="StoreStackScreen"
        component={StoreScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Image source={icons.bag} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavTab;
