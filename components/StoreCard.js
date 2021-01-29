import React from "react";
import { Text, View, Image } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const StoreCard = () => {
  const products = [
    { _id: 1, image: images.gaming_chair, price: 79.99 },
    { _id: 2, image: images.github_shirt, price: 9.99 },
    { _id: 3, image: images.coffee_mug, price: 2.99 },
    { _id: 4, image: images.ocotocat_figurine, price: 6.45 },
  ];

  return (
    <View
      style={{
        maxWidth: 164,
        width: "100%",
        maxHeight: 164,
        height: "100%",
        borderWidth: 1,
        borderColor: COLORS.Light05,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.Light05,
          borderRadius: SIZES.borderRadius,
          width: 20,
          height: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={icons.love} />
      </View>

      <Image source={} />
    </View>
  );
};

export default StoreCard;
