import React from "react";
import { View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { COLORS, icons, FONTS } from "../constants";
import { ArrowLeft } from "../constants/icons";

const Cart = ({ navigation }) => {
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
        <ArrowLeft
          style={{
            marginRight: 103,
            color: COLORS.dark02,
          }}
          width="16"
          height="15.56"
        />
        <Text
          style={{
            color: COLORS.dark01,
            ...FONTS.h1,
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          My Cart
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      {/*  Back Button And Page Title */}
      {renderHeader()}
      <Text> Cart Page</Text>
    </View>
  );
};

export default Cart;
