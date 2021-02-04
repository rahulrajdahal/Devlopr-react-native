import React, { useState } from "react";

import { Image, View, Text, TouchableOpacity } from "react-native";
import { Tick, Circle } from "../constants/icons";
import { COLORS, FONTS } from "../constants";

const ShippingAddressCard = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: COLORS.Light04,
        borderRadius: 10,
        minWidth: 327,
        width: "100%",
        minHeight: 100,
        marginBottom: 16,
      }}
      onPress={() => setIsSelected((isSelected) => !isSelected)}
    >
      <Image
        source={item.image}
        style={{ maxWidth: 48, maxHeight: 48 }}
        width="48"
        height="48"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            textTransform: "capitalize",
            color: COLORS.dark01,
            ...FONTS.h3,
            fontWeight: "500",
          }}
        >
          {item.type} Address
        </Text>
        <Text
          style={{
            color: COLORS.dark03,
            ...FONTS.body2,
            fontWeight: "normal",
            lineHeight: 18,
            textTransform: "capitalize",
          }}
        >
          {item.street}
        </Text>
        <Text
          style={{
            color: COLORS.dark03,
            ...FONTS.body2,
            fontWeight: "normal",
            lineHeight: 18,
            textTransform: "capitalize",
          }}
        >
          {item.state}
        </Text>
      </View>
      {isSelected ? (
        <View
          style={{
            backgroundColor: COLORS.primary,
            width: 28,
            height: 28,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <Tick />
        </View>
      ) : (
        <Circle />
      )}
    </TouchableOpacity>
  );
};

export default ShippingAddressCard;
