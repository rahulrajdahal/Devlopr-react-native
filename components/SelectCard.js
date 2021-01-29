import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../constants";

const SelectCard = ({ img, isactive, children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: 156,
          height: 186,
          backgroundColor: isactive
            ? COLORS.primary
            : "rgba(68, 99, 140, 0.05);",
          opacity: isactive ? 1 : 0.5,
          borderRadius: 20,
          borderStyle: isactive ? "solid" : "dashed",
          color: COLORS.dark02,
          borderWidth: isactive ? 0 : 1,
          borderColor: isactive ? "white" : COLORS.dark03,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={img} width="60" height="60" />
        <Text
          style={{
            marginTop: 12,
            color: isactive ? COLORS.white : COLORS.dark02,
            ...FONTS.body1,
            opacity: 1,
            fontWeight: "500",
          }}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectCard;
