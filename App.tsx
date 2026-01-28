import { DefaultTheme, createStaticNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomNavTab } from "./components";
import { Login, Select, SelectCountry, SelectInterests } from "./screens";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const RootStack = createStackNavigator({
  screens: {
    Login,
    Select,
    SelectCountry,
    SelectInterests,
    BottomNavTab,
  },
  screenOptions: { headerShown: false },
});

const RootNavigation = createStaticNavigation(RootStack);

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
