import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../constants";
import { ArrowLeft, Receipt } from "../constants/icons";

const Invoice = ({ navigation }) => {
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
            marginLeft: "auto",
            marginRight: "auto",
            alignSelf: "center",
          }}
        >
          Receipt
        </Text>
      </View>
    );
  }

  function renderReceipt() {
    const products = [
      { _id: 1, name: "Astra Chair", price: 79.99 },
      { _id: 2, name: "Github Shirt", price: 9.99 },
      { _id: 3, name: "Coffee Mug", price: 4.99 },
      { _id: 4, name: "Octocat Figurine", price: 14.99 },
      { _id: 5, name: "Delivery Charge", price: 0.0 },
    ];

    return (
      <View
        style={{
          width: "100%",
          height: 418,
          backgroundColor: COLORS.Light04,
          marginTop: "auto",
          marginBottom: "auto",
          elevation: 5,
          shadowOpacity: 0.1,
          shadowOffset: 5,
          shadowRadius: 99,
          display: "flex",
          alignItems: "flex-start",
          //   justifyContent: "space-around",
        }}
      >
        <Receipt style={{ alignSelf: "center", marginTop: 40 }} />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 22,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 24,
          }}
        >
          <Text
            style={{ color: COLORS.dark04, ...FONTS.body3, fontWeight: "600" }}
          >
            Items
          </Text>
          <Text
            style={{ color: COLORS.dark04, ...FONTS.body3, fontWeight: "600" }}
          >
            Amount
          </Text>
        </View>

        {products.map((product) => (
          <View
            key={product._id}
            style={{
              width: "100%",
              paddingHorizontal: 22,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <Text
              style={{
                color: COLORS.dark02,
                ...FONTS.body2,
                fontWeight: "500",
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                color: COLORS.dark02,
                ...FONTS.body2,
                fontWeight: "500",
              }}
            >
              $ {product.price}
            </Text>
          </View>
        ))}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 22,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <Text
            style={{
              color: COLORS.dark02,
              ...FONTS.body2,
              fontWeight: "500",
            }}
          >
            Total
          </Text>
          <Text
            style={{
              color: COLORS.dark02,
              fontSize: 32,
              lineHeight: 32,
              fontWeight: "500",
              textAlign: "right",
            }}
          >
            $ 109.96
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

      {/* Render Receipt */}
      {renderReceipt()}
    </View>
  );
};

export default Invoice;
