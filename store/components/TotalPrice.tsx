import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";

export default function TotalPrice() {
  return (
    <View style={styles.container}>
      <Text style={styles.dollar}>$</Text>
      <Text style={styles.total}>109.96</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: screenWidth(4),
  },
  dollar: {
    ...FONTS.h3,
    color: COLORS.dark01,
    fontWeight: "600",
    position: "relative",
    bottom: screenHeight(4),
    left: screenWidth(4),
  },
  total: {
    fontSize: screenWidth(32),
    color: COLORS.dark01,
    fontWeight: "600",
  },
});
