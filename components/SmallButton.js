import React from "react";
import { Image, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONTS, SIZES, COLORS } from "../constants";

const SmallButton = ({ icon, text, textColor, bgcolor, onPress }) => {
  return (
    <View
      style={{
        borderRadius: SIZES.borderRadius,
        backgroundColor: bgcolor,
        width: 154,
        height: 60,
        paddingVertical: 21,
        paddingHorizontal: 34,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image source={icon} style={{ marginRight: 12 }} />
        <Text style={{ color: textColor, ...FONTS.h2 }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SmallButton;
