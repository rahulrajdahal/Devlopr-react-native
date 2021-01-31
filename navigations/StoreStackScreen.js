import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Store, ItemDetail } from "../screens";

const StoreStack = createStackNavigator();

const StoreScreenStack = () => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="Store"
        component={Store}
        options={{ headerShown: false }}
      />
      <StoreStack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{ headerShown: false }}
      />
    </StoreStack.Navigator>
  );
};

export default StoreScreenStack;
