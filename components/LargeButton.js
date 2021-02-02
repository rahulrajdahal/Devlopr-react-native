import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../constants";

const LargeButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          minWidth: 327,
          width: "100%",
          minHeight: 48,
          height: "100%",
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.borderRadius,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2, fontWeight: "500" }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LargeButton;
