import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import { Bag, Compass, Home, Users } from "../constants/icons";
import { Explore, Friends } from "../screens";
import HomeStackScreen from "./HomeStackScreen";
import StoreScreenStack from "./StoreStackScreen";

const Tab = createBottomTabNavigator();
//   {
//   screenOptions: {
//     headerShown: false,
//     tabBarStyle: {
//       maxHeight: 72,
//       height: "10%",
//       backgroundColor: COLORS.white,
//       paddingTop: 8,
//       paddingBottom: 34.67,
//       paddingLeft: 15.33,
//       paddingRight: 10.67,
//       elevation: 0,
//     },
//   },
//   screens: {
//     HomeStackScreen,
//     Explore,
//     Friends,
//     StoreScreenStack,
//   },
// }

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
        name="StoreStackScreen"
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
