import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CircleImage, ScreenContainer } from "../../components";
import { COLORS, FONTS, images } from "../../constants";
import { ArrowRight, Coupon } from "../../constants/icons";
import { screenHeight, screenWidth } from "../../constants/theme";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import CartItems from "../components/CartItems";

type CartScreenProps = NativeStackScreenProps<StoreStackParamList, "Cart">;

export default function CartScreen({ navigation }: Readonly<CartScreenProps>) {
  const [discount, setDiscount] = useState("");

  function renderCartItems() {
    return (
      <View
        style={{
          maxHeight: screenHeight(360),
        }}
      >
        <CartItems />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 24,
          }}
        >
          <CircleImage
            image={images.delivery}
            imageProps={{
              style: { width: screenWidth(32), height: screenWidth(32) },
            }}
          />
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
    <ScreenContainer>
      {/* Cart Items */}
      {renderCartItems()}
      {/* Discount Coupon Form */}
      {renderDiscountForm()}

      {/* Total And Checkout */}
      {renderTotalAndCheckout()}
    </ScreenContainer>
  );
}
