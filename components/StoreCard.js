import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const StoreCard = ({ image, name, price }) => {
  function renderLoveIcon() {
    return (
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor: COLORS.Light05,
          borderRadius: SIZES.borderRadius,
          padding: 6.25,
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Image source={icons.love} style={{ alignSelf: "center" }} />
      </View>
    );
  }

  function renderProductImage() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={image} style={{ alignSelf: "center" }} />
      </View>
    );
  }

  function renderPriceAndAddRow() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          right: 12,
          left: 12,
          bottom: 12,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: COLORS.primary_text,
              ...FONTS.body2,
              fontWeight: "normal",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: COLORS.dark03,
              ...FONTS.body3,
              fontWeight: "600",
              alignSelf: "flex-start",
              marginTop: 3,
            }}
          >
            $ {price}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: COLORS.white,
            shadowColor: "rgba(64, 72, 95, 0.14)",
            shadowRadius: 5,
            elevation: 5,
            borderRadius: 12,
            width: 32,
            height: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={icons.plus} />
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={{
        minWidth: 164,
        width: "100%",
        maxHeight: 164,
        height: "100%",
        borderWidth: 1,
        borderColor: COLORS.Light05,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Love Icon */}
      {renderLoveIcon()}

      {/* Prodcut Image */}
      {renderProductImage()}

      {/* Price And Add Prodcut Row */}
      {renderPriceAndAddRow()}
    </TouchableOpacity>
  );
};

export default StoreCard;
