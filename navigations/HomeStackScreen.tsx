import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleScreen from "../articles/screens/ArticleScreen";
import Notifications from "../notifications/screens/Notifications";
import { Challenge } from "../screens";
import HomeScreen from "../screens/Home";

export default createNativeStackNavigator({
  screens: {
    HomeScreen,
    ArticleScreen,
    Challenge,
    Notifications,
  },
});
