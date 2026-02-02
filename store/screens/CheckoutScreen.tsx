import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View } from "react-native";
import {
  AddNewButton,
  LargeButton,
  ShippingAddressCard,
} from "../../components";
import { COLORS, images } from "../../constants";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";

type CheckoutScreenProps = NativeStackScreenProps<
  StoreStackParamList,
  "Checkout"
>;

export default function CheckoutScreen({
  navigation,
}: Readonly<CheckoutScreenProps>) {

  function renderAddress() {
    const [isSelected, setIsSelected] = useState(false);

    const addresses = [
      {
        _id: 1,
        image: images.home_address,
        type: "home",
        street: "Burgundy Street 123",
        state: "Victoria, Australia",
      },
      {
        _id: 2,
        image: images.office,
        type: "office",
        street: "Bulko Street, Townsroad",
        state: "Victoria, Australia",
      },
    ];

    return (
      <>
        <ShippingAddressCard
          item={addresses[0]}
          isSelected={!isSelected}
          onPress={() => setIsSelected((isSelected) => !isSelected)}
        />

        <ShippingAddressCard
          item={addresses[1]}
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
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >

      {/* Shipping Adresses */}
      {renderAddress()}

      {/* Add New Shipping Address */}
      {renderNewAddress()}

      {/* Proceed To Pay Button */}
      {renderPayButton()}
    </View>
  );
}
