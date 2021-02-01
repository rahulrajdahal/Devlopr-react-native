import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { COLORS, icons, FONTS, images } from "../constants";
import { ArrowLeft, Close } from "../constants/icons";

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
            alignSelf: "flex-start",
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

  function renderCartItems() {
    const renderItem = ({ item }) => {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.Light03,
              borderRadius: 110,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={item.image}
              style={{
                resizeMode: "contain",
                width: 54.55,
                height: 54.55,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 20,
              marginRight: 52,
            }}
          >
            <Text
              style={{
                color: COLORS.dark01,
                ...FONTS.h3,
                fontWeight: "600",
                maxWidth: 118,
              }}
              numberOfLines={1}
            >
              {item.name}
            </Text>
            <Text
              style={{
                marginTop: 4,
                color: COLORS.dark03,
                ...FONTS.body2,
                fontWeight: "300",
              }}
            >
              ${item.price}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: 88,
              height: 40,
              backgroundColor: COLORS.Light05,
              borderRadius: 10,
            }}
          >
            <Text>+</Text>
            <Text
              style={{ color: COLORS.dark01, ...FONTS.h3, fontWeight: "500" }}
            >
              {item.quantity}
            </Text>
            <Text>-</Text>
          </View>
          <TouchableOpacity onPress={() => console.log("closebutton")}>
            <Close width="13.33" height="13.33" />
          </TouchableOpacity>
        </View>
      );
    };

    const products = [
      {
        _id: 1,
        image: images.gaming_chair,
        name: "Astra Chair",
        price: "79.99",
        quantity: "01",
      },
      {
        _id: 2,
        image: images.github_shirt,
        name: "Github Shirt",
        price: "9.99",
        quantity: "01",
      },
      {
        _id: 3,
        image: images.coffee_mug,
        name: "Coffe Mug",
        price: "4.99",
        quantity: "01",
      },
      {
        _id: 4,
        image: images.ocotocat_figurine,
        name: "Octocat Figurines",
        price: "14.99",
        quantity: "01",
      },
    ];

    return (
      <View style={{ marginTop: 32, minWidth: 329, width: "100%" }}>
        <FlatList data={products} renderItem={renderItem} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: COLORS.Light03,
              borderRadius: 110,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.delivery}
              style={{
                resizeMode: "contain",
                width: 31,
                height: 31,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: 20,
              marginRight: 52,
            }}
          >
            <Text
              style={{
                color: COLORS.dark01,
                ...FONTS.h3,
                fontWeight: "600",
              }}
            >
              Delivery
            </Text>
            <Text
              style={{
                marginTop: 4,
                color: COLORS.dark03,
                ...FONTS.body2,
                fontWeight: "300",
              }}
            >
              FREE
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderDiscountForm() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Discount Form</Text>
        <Text>Button</Text>
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
      {/* Cart Items */}
      {renderCartItems()}
      {/* Discount Coupon Form */}
      {renderDiscountForm()}
    </View>
  );
};

export default Cart;
