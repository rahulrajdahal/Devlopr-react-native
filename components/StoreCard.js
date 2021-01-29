import React from "react";
import { Text, View, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const StoreCard = ({ image, name, price }) => {
  return (
    <View
      style={{
        maxWidth: 164,
        width: "100%",
        maxHeight: 164,
        height: "100%",
        borderWidth: 1,
        borderColor: COLORS.Light05,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.Light05,
          borderRadius: SIZES.borderRadius,
          width: 20,
          height: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Image source={icons.love} style={{ alignSelf: "center" }} />
      </View>

      <Image source={image} style={{ alignSelf: "center" }} />

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: 11,
          left: 12,
          bottom: 12,
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
            fontWeight: "normal",
          }}
        >
          $ {price}
        </Text>
      </View>

      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 12,
          backgroundColor: COLORS.white,
          shadowColor: "rgba(64, 72, 95, 0.14)",
          elevation: 12,
          shadowRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: 12,
          bottom: 13,
        }}
      >
        <Image source={icons.plus} />
      </View>
    </View>
  );
};

export default StoreCard;
