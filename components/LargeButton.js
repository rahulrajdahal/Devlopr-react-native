import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES } from "../constants";

const LargeButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          maxWidth: 327,
          width: "100%",
          backgroundColor: COLORS.primary,
          paddingHorizontal: 145,
          paddingVertical: 21,
          borderRadius: SIZES.borderRadius,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2, fontWeight: "500" }}>
          Next
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LargeButton;
