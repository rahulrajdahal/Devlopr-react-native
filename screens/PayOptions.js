import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ArrowLeft, CirclesOverlap } from "../constants/icons";
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
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingHorizontal: 24,
          paddingVertical: 20,
          minWidth: 327,
          width: "100%",
          height: 180,
          backgroundColor: COLORS.primary,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <CirclesOverlap />
          <Text
            style={{
              color: COLORS.dark04,
              ...FONTS.body3,
              fontWeight: "600",
            }}
          >
            MasterCard
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{
              color: COLORS.Light04,
              ...FONTS.h1,
              fontWeight: "normal",
            }}
          >
            6145
          </Text>
          <Text
            style={{
              color: COLORS.Light04,
              ...FONTS.h1,
              fontWeight: "normal",
            }}
          >
            ****
          </Text>
          <Text
            style={{
              color: COLORS.Light04,
              ...FONTS.h1,
              fontWeight: "normal",
            }}
          >
            ****
          </Text>
          <Text
            style={{
              color: COLORS.Light04,
              ...FONTS.h1,
              fontWeight: "normal",
            }}
          >
            8754
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              color: COLORS.Light04,
              ...FONTS.body2,
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Mrs. Kelly Francise
          </Text>
          <Text
            style={{
              color: COLORS.dark04,
              ...FONTS.body4,
              fontWeight: "500",
            }}
          >
            08/24
          </Text>
        </View>
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
