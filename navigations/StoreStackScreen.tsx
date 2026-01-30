import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddPayment,
  AddShipping,
  Cart,
  Checkout,
  Invoice,
  ItemDetail,
  PayOptions
} from "../screens";
import StoreScreen from "../store/screens/StoreScreen";

export type StoreStackParamList = {
  Store: undefined;
  ItemDetail: { itemId: number };
  Cart: undefined;
  Checkout: undefined;
  AddShipping: undefined;
  PaymentOptions: undefined;
  AddPayment: undefined;
  Invoice: undefined;
};
const StoreStack = createNativeStackNavigator<StoreStackParamList>();

const StoreScreenStack = () => {
  return (
    <StoreStack.Navigator screenOptions={{ headerShown: false }}>
      <StoreStack.Screen name="Store" component={StoreScreen} />
      <StoreStack.Screen name="ItemDetail" component={ItemDetail} />
      <StoreStack.Screen name="Cart" component={Cart} />
      <StoreStack.Screen name="Checkout" component={Checkout} />
      <StoreStack.Screen name="AddShipping" component={AddShipping} />
      <StoreStack.Screen name="PaymentOptions" component={PayOptions} />
      <StoreStack.Screen name="AddPayment" component={AddPayment} />
      <StoreStack.Screen name="Invoice" component={Invoice} />
    </StoreStack.Navigator>
  );
};

export default StoreScreenStack;
