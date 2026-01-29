import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import { Bag, Compass, Home, Users } from "../constants/icons";
import { Explore, Friends } from "../screens";
import HomeStackScreen, { HomeStackParamList } from "./HomeStackScreen";
import StoreScreenStack from "./StoreStackScreen";

export type TabParamList = {
  Home: HomeStackParamList;
  Explore: undefined;
  Friends: undefined;
  Store: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomNavTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          maxHeight: 72,
          height: "10%",
          backgroundColor: COLORS.white,
          paddingTop: 8,
          paddingBottom: 34.67,
          paddingLeft: 15.33,
          paddingRight: 10.67,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
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
            <Compass
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
            <Users
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreenStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Bag
              style={{ color: COLORS.primary, opacity: focused ? 1 : 0.4 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
