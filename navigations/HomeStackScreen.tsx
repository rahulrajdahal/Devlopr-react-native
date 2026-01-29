import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleScreen from "../articles/screens/ArticleScreen";
import HomeScreen from "../home/screens/HomeScreen";
import NotificationsScreen from "../notifications/screens/NotificationsScreen";
import { Challenge } from "../screens";

export type HomeStackParamList = {
  Home: undefined;
  Article: { articleId: number };
  Challenge: undefined;
  Notifications: undefined;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

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
      <HomeStack.Screen name="Article" component={ArticleScreen} />
      <HomeStack.Screen name="Challenge" component={Challenge} />
      <HomeStack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
