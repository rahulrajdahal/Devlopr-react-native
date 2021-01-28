import React from "react";
import { Image, View, Text } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";

const SmallButton = ({ icon, text, textColor, bgcolor }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: SIZES.borderRadius,
        backgroundColor: bgcolor,
        width: 154,
        height: 60,
        paddingVertical: 21,
        paddingHorizontal: 34,
      }}
    >
      <Image source={icon} style={{ marginRight: 12 }} />
      <Text style={{ color: textColor, ...FONTS.h2 }}>{text}</Text>
    </View>
  );
};

export default SmallButton;
