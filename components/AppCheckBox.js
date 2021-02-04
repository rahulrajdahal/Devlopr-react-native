import React from "react";
import { TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import { Tick } from "../constants/icons";

const AppCheckBox = ({ onPress, isActive }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 5,
        width: 20,
        height: 20,
        backgroundColor: isActive ? COLORS.primary : COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.primary,
        borderWidth: 1,
      }}
      onPress={onPress}
    >
      {isActive ? <Tick /> : null}
    </TouchableOpacity>
  );
};

export default AppCheckBox;
