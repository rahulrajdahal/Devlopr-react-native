import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notifications from "../notifications/screens/Notifications";
import { Article, Challenge } from "../screens";
import HomeScreen from "../screens/Home";

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Article" component={Article} />
      <HomeStack.Screen name="Challenge" component={Challenge} />
      <HomeStack.Screen
        name="Notifications"
        component={Notifications}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
