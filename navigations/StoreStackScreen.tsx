import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Invoice } from "../screens";
import AddPaymentScreen from "../store/screens/AddPaymentScreen";
import AddShippingScreen from "../store/screens/AddShippingAddressScreen";
import CartScreen from "../store/screens/CartScreen";
import CheckoutScreen from "../store/screens/CheckoutScreen";
import PaymentOptionsScreen from "../store/screens/PaymentOptionsScreen";
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
      <StoreStack.Screen
        name="Checkout"
        options={{ headerShown: true, title: "Shipping Address" }}
        component={CheckoutScreen}
      />
      <StoreStack.Screen
        name="AddShipping"
        options={{ headerShown: true, title: "Add New Shipping Address" }}
        component={AddShippingScreen}
      />
      <StoreStack.Screen
        name="PaymentOptions"
        options={{ headerShown: true, title: "Payment Options" }}
        component={PaymentOptionsScreen}
      />
      <StoreStack.Screen
        name="AddPayment"
        options={{ headerShown: true, title: "Add New Payment Card" }}
        component={AddPaymentScreen}
      />
      <StoreStack.Screen name="Invoice" component={Invoice} />
    </StoreStack.Navigator>
  );
};

export default StoreScreenStack;
