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
import { LargeButton, ShippingAddressCard } from "../components";
import { FlatList } from "react-native-gesture-handler";

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

    const renderItem = ({ item }) => {
      return <ShippingAddressCard item={item} />;
    };

    return (
      <>
        <FlatList
          data={addresses}
          renderItem={renderItem}
          keyExtractor={(item) => `${item._id}`}
        />
      </>
    );
  }

  function renderNewAddress() {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("AddShipping")}
        style={{
          maxWidth: 327,
          width: "100%",
          maxHeight: 60,
          height: "100%",
          borderColor: COLORS.primary,
          borderRadius: 20,
          borderStyle: "dashed",
          borderWidth: 1,
          backgroundColor: "rgba(70, 109, 232, 0.1)",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: 16,
          marginBottom: 280,
        }}
      >
        <Text
          style={{
            color: COLORS.primary,
            textAlign: "center",
            ...FONTS.body2,
            fontWeight: "500",
            alignSelf: "center",
            textTransform: "uppercase",
          }}
        >
          Add New Shipping Address
        </Text>
      </TouchableOpacity>
    );
  }

  function renderPayButton() {
    return (
      <LargeButton
        text="Proceed To Pay"
        onPress={() => console.log("Pay")}
        style={{ alignSelf: "center", marginBottom: 24 }}
      />
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
