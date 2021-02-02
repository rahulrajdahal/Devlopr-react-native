import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, images } from "../constants";
import { ArrowLeft, Check, CheckActive, Tick } from "../constants/icons";
import { LargeButton } from "../components";

const Checkout = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
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
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 40,
          backgroundColor: COLORS.Light04,
          borderRadius: 10,
          minWidth: 327,
          width: "100%",
          minHeight: 100,
          //   height: "100%",
        }}
      >
        <Image
          source={images.home_address}
          style={{ maxWidth: 48, maxHeight: 48 }}
          width="48"
          height="48"
        />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ color: COLORS.dark01, ...FONTS.h3, fontWeight: "500" }}
          >
            Home Address
          </Text>
          <Text
            style={{
              color: COLORS.dark03,
              ...FONTS.body2,
              fontWeight: "normal",
              lineHeight: 18,
            }}
          >
            Burgundy Street 123
          </Text>
          <Text
            style={{
              color: COLORS.dark03,
              ...FONTS.body2,
              fontWeight: "normal",
              lineHeight: 18,
            }}
          >
            Victoria, Australia
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: 28,
            height: 28,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <Tick />
        </View>
      </View>
    );
  }

  function renderNewAddress() {
    return (
      <TouchableOpacity
        onPress={() => console.log("new address")}
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
          marginTop: 16,
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

  function renderProceedButton() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 24,
          marginHorizontal: 24,
        }}
      >
        <LargeButton text="Proceed to Pay" />
      </View>
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
      {renderAddress()}
      {renderAddress()}
      {renderAddress()}
      {renderAddress()}
      {renderAddress()}
      {/* Add New Shipping Address */}
      {renderNewAddress()}

      {/* Proceed To Pay Button */}
      {renderProceedButton()}
    </View>
  );
};

export default Checkout;
