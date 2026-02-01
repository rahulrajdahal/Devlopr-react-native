import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddPayment,
  AddShipping,
  Checkout,
  Invoice,
  PayOptions,
} from "../screens";
import CartScreen from "../store/screens/CartScreen";
import ProductDetailScreen from "../store/screens/ProductDetailScreen";
import StoreScreen from "../store/screens/StoreScreen";

export type StoreStackParamList = {
  Store: undefined;
  ProductDetail: { productId: number };
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
      <StoreStack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <StoreStack.Screen
        name="Cart"
        options={{ headerShown: true }}
        component={CartScreen}
      />
      <StoreStack.Screen name="Checkout" component={Checkout} />
      <StoreStack.Screen name="AddShipping" component={AddShipping} />
      <StoreStack.Screen name="PaymentOptions" component={PayOptions} />
      <StoreStack.Screen name="AddPayment" component={AddPayment} />
      <StoreStack.Screen name="Invoice" component={Invoice} />
    </StoreStack.Navigator>
  );
};

export default StoreScreenStack;
