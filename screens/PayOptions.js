import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ArrowLeft } from "../constants/icons";
import { COLORS, FONTS, images } from "../constants";

const PayOptions = ({ navigation }) => {
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
          Select Card
        </Text>
      </View>
    );
  }

  function renderPaymentCards() {
    return (
      <View>
        <Text>Payment Card</Text>
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
      {/* Payment Cards */}
      {renderPaymentCards()}
      <Text>PayOptions</Text>
    </View>
  );
};

export default PayOptions;
