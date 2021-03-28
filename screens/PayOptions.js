import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ArrowLeft, CirclesOverlap } from "../constants/icons";
import { COLORS, FONTS, images } from "../constants";
import { AddNewButton, PayCard } from "../components";
import { ScrollView } from "react-native-gesture-handler";

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
          Shipping Address
        </Text>
      </View>
    );
  }
  function renderPaymentCards() {
    return (
      <>
        <PayCard
          onPress={() => navigation.navigate("Invoice")}
          bgColor={COLORS.primary}
          PinFirst="6145"
          PinLast="8754"
          expDate="08/24"
        />
        <PayCard
          onPress={() => navigation.navigate("Invoice")}
          bgColor={COLORS.dark01}
          PinFirst="7854"
          PinLast="2145"
          expDate="05/29"
        />
      </>
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

      {/* Add New Payment Button */}
      <AddNewButton
        text="Add New Payment Method"
        onPress={() => navigation.navigate("AddPayment")}
      />
    </View>
  );
};

export default PayOptions;
