import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";
import { Tick } from "../constants/icons";

const AppCheckBox = () => {
  const [isActive, setIsActive] = useState(false);
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
      onPress={() => setIsActive((isActive) => !isActive)}
    >
      {isActive ? <Tick /> : null}
    </TouchableOpacity>
  );
};

export default AppCheckBox;
