import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native";
import { Button, ScreenContainer, ShippingAddressCard } from "../../components";
import { images } from "../../constants";
import {
  COLORS,
  FONTS,
  screenHeight,
  screenWidth,
} from "../../constants/theme";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import { AddressType } from "../components/ShippingAddressCard";

type CheckoutScreenProps = NativeStackScreenProps<
  StoreStackParamList,
  "Checkout"
>;

export default function CheckoutScreen({
  navigation,
}: Readonly<CheckoutScreenProps>) {
  const [isSelected, setIsSelected] = useState(AddressType.Home);

  const addresses = [
    {
      image: images.home_address,
      type: AddressType.Home,
      street: "Burgundy Street 123",
      state: "Victoria, Australia",
    },
    {
      image: images.office,
      type: AddressType.Office,
      street: "Bulko Street, Townsroad",
      state: "Victoria, Australia",
    },
  ];

  return (
    <ScreenContainer>
      <View style={{ flexDirection: "column", gap: screenHeight(16) }}>
        {addresses.map((address) => (
          <ShippingAddressCard
            key={address.type}
            address={address}
            isSelected={isSelected === address.type}
            onPress={() => setIsSelected(address.type)}
          />
        ))}

        <Button
          text="Add new Shipping Address"
          onPress={() => navigation.navigate("AddShipping")}
          style={{
            borderStyle: "dashed",
            borderWidth: screenWidth(1),
            borderColor: COLORS.primary,
            backgroundColor: "rgba(70, 109, 232, 0.1)",
            borderRadius: screenWidth(20),
          }}
          textProps={{
            style: {
              color: COLORS.primary,
              textTransform: "uppercase",
              ...FONTS.body2,
            },
          }}
        />
      </View>

      <Button
        text="Proceed To Pay"
        style={{ marginTop: screenHeight(260), marginBottom: screenHeight(24) }}
        onPress={() => navigation.navigate("PaymentOptions")}
      />
    </ScreenContainer>
  );
}
