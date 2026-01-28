import { createStackNavigator } from "@react-navigation/stack";
import {
  AddPayment,
  AddShipping,
  Cart,
  Checkout,
  Invoice,
  ItemDetail,
  PayOptions,
  Store,
} from "../screens";

const StoreStack = createStackNavigator();

const StoreScreenStack = () => {
  return (
    <StoreStack.Navigator screenOptions={{ headerShown: false }}>
      <StoreStack.Screen name="Store" component={Store} />
      <StoreStack.Screen name="ItemDetail" component={ItemDetail} />
      <StoreStack.Screen name="Cart" component={Cart} />
      <StoreStack.Screen name="Checkout" component={Checkout} />
      <StoreStack.Screen name="AddShipping" component={AddShipping} />
      <StoreStack.Screen name="PayOptions" component={PayOptions} />
      <StoreStack.Screen name="AddPayment" component={AddPayment} />
      <StoreStack.Screen name="Invoice" component={Invoice} />
    </StoreStack.Navigator>
  );
};

export default StoreScreenStack;
