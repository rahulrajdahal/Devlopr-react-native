import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FONTS } from "../../constants";
import { Coupon } from "../../constants/icons";
import { COLORS, screenHeight, screenWidth } from "../../constants/theme";

export default function CouponCodeInput() {
  const [discount, setDiscount] = useState("");

  return (
    <View style={styles.container}>
      <Coupon width={screenWidth(12)} height={screenHeight(10)} />
      <TextInput
        defaultValue={discount}
        onChangeText={(discount) => setDiscount(discount)}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.Light04,
    maxWidth: screenWidth(220),
    maxHeight: screenHeight(48),
    borderRadius: screenWidth(10),
    paddingVertical: screenHeight(18),
    paddingHorizontal: screenWidth(20),
    gap: screenWidth(10),
  },
  input: {
    width: "100%",
    ...FONTS.body2,
    color: COLORS.dark02,
    fontWeight: "normal",
  },
});
