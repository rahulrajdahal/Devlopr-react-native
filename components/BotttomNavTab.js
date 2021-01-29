import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, View } from "react-native";
import { COLORS, icons } from "../constants";

import { Home, Explore, Friends, Store } from "../screens";

const Tab = createBottomTabNavigator();

const BottomNavTab = () => {
  return (
    <View
      style={{
        width: 375,
        width: "100%",
        height: 72,
        height: "100%",
        backgroundColor: COLORS.white,
        position: "absolute",
        bottom: 0,
      }}
    >
      <Tab.Navigator tabBarOptions={{ activeTintColor: COLORS.primary }}>
        <Tab.Screen
          name="Home"
          component={Home}
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
          name="Store"
          component={Store}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => <Image source={icons.bag} />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavTab;
