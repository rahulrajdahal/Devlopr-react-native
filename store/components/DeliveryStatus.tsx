import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CircleImage } from "../../components";
import { COLORS, FONTS, images } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";

export default function DeliveryStatus() {
  return (
    <View style={styles.container}>
      <CircleImage
        image={images.delivery}
        imageProps={{
          style: { width: screenWidth(32), height: screenWidth(32) },
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Delivery</Text>
        <Text style={styles.status}>FREE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: screenHeight(24),
    gap: screenWidth(20),
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: screenHeight(4),
  },
  title: {
    color: COLORS.dark01,
    ...FONTS.h3,
    fontWeight: "600",
  },
  status: {
    color: COLORS.dark03,
    ...FONTS.body2,
    fontWeight: "300",
  },
});
