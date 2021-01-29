import React from "react";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONTS, SIZES } from "../constants";

const SmallButton = ({ icon, text, textColor, bgcolor, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.borderRadius,
        backgroundColor: bgcolor,
        width: 154,
        height: 60,
        paddingVertical: 21,
        paddingHorizontal: 34,
      }}
    >
      {icon ? <Image source={icon} style={{ marginRight: 12 }} /> : null}
      <Text style={{ color: textColor, ...FONTS.h2, fontWeight: "500" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SmallButton;
