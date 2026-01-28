import {
  DefaultTheme,
  StaticParamList,
  createStaticNavigation,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomNavTab } from "./components";
import {
  LoginScreen,
  SelectCountry,
  SelectInterests,
  SelectScreen,
} from "./screens";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const RootStack = createStackNavigator({
  screens: {
    Login:LoginScreen,
    Select:SelectScreen,
    SelectCountry,
    SelectInterests,
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
