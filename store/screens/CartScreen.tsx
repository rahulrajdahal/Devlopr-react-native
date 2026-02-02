import React from "react";
import { StyleSheet, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, ScreenContainer } from "../../components";
import { COLORS, FONTS } from "../../constants";
import icons from "../../constants/icons";
import { screenHeight, screenWidth } from "../../constants/theme";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import CartItems from "../components/CartItems";
import CouponCodeInput from "../components/CouponCodeInput";
import DeliveryStatus from "../components/DeliveryStatus";
import TotalPrice from "../components/TotalPrice";

type CartScreenProps = NativeStackScreenProps<StoreStackParamList, "Cart">;

export default function CartScreen({ navigation }: Readonly<CartScreenProps>) {
  return (
    <ScreenContainer>
      <View
        style={{
          maxHeight: screenHeight(360),
        }}
      >
        <CartItems />

        <DeliveryStatus />
      </View>

      <View style={styles.discountContainer}>
        <CouponCodeInput />
        <Button
          text="Apply"
          style={{
            backgroundColor: "rgba(70, 109, 232, 0.2)",
            borderRadius: screenWidth(10),
            paddingHorizontal: screenWidth(32),
            paddingVertical: screenHeight(16),
          }}
          textProps={{
            style: { fontWeight: "500", color: COLORS.primary, ...FONTS.body2 },
          }}
        />
      </View>

      <View style={styles.totalContainer}>
        <TotalPrice />
        <Button
          text="Checkout"
          style={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: screenWidth(36),
            paddingVertical: screenHeight(12),
            borderRadius: screenWidth(10),
            gap: screenWidth(12),
          }}
          suffixIcon={icons.arrow_right}
          iconProps={{
            style: { width: screenWidth(10), height: screenWidth(10) },
          }}
          textProps={{ style: { ...FONTS.body2, fontWeight: "500" } }}
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  discountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: screenHeight(32),
  },
  totalContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: screenHeight(104),
    marginBottom: screenHeight(24),
  },
});
