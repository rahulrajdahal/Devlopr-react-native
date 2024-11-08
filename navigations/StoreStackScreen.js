import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import {
  Store,
  ItemDetail,
  Cart,
  Checkout,
  PayOptions,
  AddShipping,
  AddPayment,
  Invoice,
} from "../screens";

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
      <StoreStack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <StoreStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }}
      />
      <StoreStack.Screen
        name="AddShipping"
        component={AddShipping}
        options={{ headerShown: false }}
      />
      <StoreStack.Screen
        name="PayOptions"
        component={PayOptions}
        options={{ headerShown: false }}
      />
      <StoreStack.Screen
        name="AddPayment"
        component={AddPayment}
        options={{ headerShown: false }}
      />
      <StoreStack.Screen
        name="Invoice"
        component={Invoice}
        options={{ headerShown: false }}
      />
    </StoreStack.Navigator>
  );
};

export default StoreScreenStack;
