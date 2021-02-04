import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, images } from "../constants";
import {
  ArrowLeft,
  Check,
  CheckActive,
  Circle,
  Tick,
} from "../constants/icons";
import { AddNewButton, LargeButton, ShippingAddressCard } from "../components";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Checkout = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            style={{
              marginRight: 103,
              color: COLORS.dark02,
              alignSelf: "flex-start",
            }}
            width="16"
            height="15.56"
          />
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.dark01,
            ...FONTS.h1,
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          Shipping Address
        </Text>
      </View>
    );
  }

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
      {/*  Back Button And Page Title */}
      {renderHeader()}
      {/* Shipping Adresses */}
      {renderAddress()}

      {/* Add New Shipping Address */}
      {renderNewAddress()}

      {/* Proceed To Pay Button */}
      {renderPayButton()}
    </View>
  );
};

export default Checkout;
