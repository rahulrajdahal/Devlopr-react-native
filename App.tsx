import {
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomNavTab } from "./components";
import {
  LoginScreen,
  SelectCountryScreen,
  SelectInterestsScreen,
  SelectScreen,
} from "./screens";

const RootStack = createStackNavigator({
  screens: {
    LoginScreen,
    SelectScreen,
    SelectCountryScreen,
    SelectInterestsScreen,
    BottomNavTab,
  },
  screenOptions: { headerShown: false },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootNavigation = createStaticNavigation(RootStack);

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
