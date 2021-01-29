import React, { useState } from "react";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const IconCard = ({ text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isActive ? COLORS.primary : "rgba(68, 99, 140, 0.05)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 48,
        borderStyle: isActive ? "solid" : "dashed",
        borderWidth: 1,
        borderColor: isActive ? COLORS.white : COLORS.dark03,
        paddingLeft: 15,
        paddingRight: 20,
        paddingHorizontal: 15,
        borderRadius: SIZES.borderRadius,
        marginBottom: 16,
      }}
      onPress={() => setIsActive((isActive) => !isActive)}
    >
      <Image
        source={isActive ? icons.check_active : icons.check}
        style={{ marginRight: 7.5 }}
      />
      <Text
        style={{
          color: isActive ? COLORS.Light01 : COLORS.dark02,
          ...FONTS.body1,
          fontWeight: "normal",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default IconCard;
