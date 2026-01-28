import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { BottomNavTab } from "./components";
import { Login, Select, SelectCountry, SelectInterests } from "./screens/";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="SelectCountry" component={SelectCountry} />
        <Stack.Screen name="SelectInterests" component={SelectInterests} />
        <Stack.Screen name="BottomNavTab" component={BottomNavTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
