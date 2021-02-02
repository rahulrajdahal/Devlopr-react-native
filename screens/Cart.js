import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import { COLORS, icons, FONTS, images } from "../constants";
import { ArrowRight, ArrowLeft, Close, Coupon } from "../constants/icons";

const Cart = ({ navigation }) => {
  const [discount, setDiscount] = useState("");

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
          My Cart
        </Text>
      </View>
    );
  }

  function renderCartItems() {
    const renderItem = ({ item }) => {
      return (
        <View
          key={item._id}
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
      <View
        style={{
          marginTop: 32,
          minWidth: 329,
          width: "100%",
          maxHeight: 394,
        }}
      >
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => `${item._id}`}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 24,
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
          marginTop: 32,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: COLORS.Light04,
            maxWidth: 219,
            width: "100%",
            maxHeight: 48,
            height: "100%",
            borderRadius: 10,
            paddingVertical: 17,
            paddingLeft: 20,
          }}
        >
          <Coupon width="11.67" height="10.5" />
          <TextInput
            placeholder="Discount Coupon"
            onChangeText={(discount) => setDiscount(discount)}
            defaultValue={discount}
            style={{
              marginLeft: 9.17,
              width: "100%",
              color: COLORS.dark02,
              ...FONTS.body2,
              fontWeight: "normal",
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "rgba(70, 109, 232, 0.2)",
            minWidth: 96,
            minHeight: 48,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 17,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              ...FONTS.body2,
              fontWeight: "500",
              color: COLORS.primary,
            }}
          >
            Apply
          </Text>
        </View>
      </View>
    );
  }

  function renderTotalAndCheckout() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 112,
          marginBottom: 24,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.dark01,
              fontWeight: "600",
              width: 11,
              height: 16,
              position: "relative",
              bottom: 4,
              left: 4,
            }}
          >
            $
          </Text>
          <Text
            style={{
              fontSize: 32,
              lineHeight: 32,
              color: COLORS.dark01,
              fontWeight: "600",
              marginLeft: 4,
            }}
          >
            109.96
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Checkout")}
          style={{
            width: 152,
            height: 48,
            backgroundColor: COLORS.primary,
            borderRadius: 10,
            paddingVertical: 17,
            paddingHorizontal: 36,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body2,
              fontWeight: "500",
              alignSelf: "center",
            }}
          >
            Checkout
          </Text>
          <ArrowRight width="9.33" height="9.07" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView
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

      {/* Total And Checkout */}
      {renderTotalAndCheckout()}
    </ScrollView>
  );
};

export default Cart;
