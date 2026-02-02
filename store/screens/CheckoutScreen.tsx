import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native";
import {
  AddNewButton,
  LargeButton,
  ScreenContainer,
  ShippingAddressCard,
} from "../../components";
import { images } from "../../constants";
import { screenHeight } from "../../constants/theme";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import { AddressType } from "../components/ShippingAddressCard";

type CheckoutScreenProps = NativeStackScreenProps<
  StoreStackParamList,
  "Checkout"
>;

export default function CheckoutScreen({
  navigation,
}: Readonly<CheckoutScreenProps>) {
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

  const [isSelected, setIsSelected] = useState(AddressType.Home);
  function renderAddress() {
    return (
      <>
        <ShippingAddressCard
          address={addresses[0]}
          isSelected={!isSelected}
          onPress={() => setIsSelected((isSelected) => !isSelected)}
        />

        <ShippingAddressCard
          address={addresses[1]}
          isSelected={isSelected}
          onPress={() => setIsSelected((isSelected) => !isSelected)}
        />
      </>
    );
  }

  function renderNewAddress() {
    return (
      <AddNewButton
        text="Add New Shipping Address"
        onPress={() => navigation.navigate("AddShipping")}
      />
    );
  }

  function renderPayButton() {
    return (
      <LargeButton
        text="Proceed To Pay"
        onPress={() => navigation.navigate("PayOptions")}
        style={{ alignSelf: "center", marginTop: 260, marginBottom: 24 }}
      />
    );
  }

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
      </View>

      {/* Add New Shipping Address */}
      {renderNewAddress()}

      {/* Proceed To Pay Button */}
      {renderPayButton()}
    </ScreenContainer>
  );
}
