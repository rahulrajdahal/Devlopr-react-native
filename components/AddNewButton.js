import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../constants";

const AddNewButton = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        maxWidth: 327,
        width: "100%",
        maxHeight: 60,
        height: "100%",
        borderColor: COLORS.primary,
        borderRadius: 20,
        borderStyle: "dashed",
        borderWidth: 1,
        backgroundColor: "rgba(70, 109, 232, 0.1)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        ...style,
      }}
    >
      <Text
        style={{
          color: COLORS.primary,
          textAlign: "center",
          ...FONTS.body2,
          fontWeight: "500",
          alignSelf: "center",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AddNewButton;
