import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Black Friday Sale</Text>
        <Text style={styles.discount}>upto 90% off</Text>

        <Text style={styles.info}>
          Get upto 90% off on selected items this Black Friday Season with free
          deliveries.
        </Text>

        <View style={styles.arrowIconButton}>
          <Image source={icons.arrow_right} />
        </View>
      </View>
      <Image source={images.shopping} style={styles.illustration} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: screenHeight(12),
    maxWidth: "100%",
    width: "100%",
    maxHeight: screenHeight(264),
    backgroundColor: COLORS.dark02,
    borderRadius: SIZES.borderRadius,
    alignSelf: "center",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: screenHeight(32),
    marginLeft: screenWidth(32),
  },
  title: {
    color: COLORS.Light01,
    ...FONTS.h2,
    lineHeight: screenWidth(24),
    fontWeight: "500",
  },
  discount: {
    marginTop: screenHeight(2),
    color: COLORS.Light01,
    fontSize: screenWidth(32),
    lineHeight: screenWidth(32),
    fontWeight: "600",
  },
  info: {
    marginTop: screenHeight(24),
    color: COLORS.Light05,
    ...FONTS.body2,
    lineHeight: screenWidth(18),
    fontWeight: "normal",
    maxWidth: screenWidth(179),
    width: "100%",
  },
  arrowIconButton: {
    marginTop: screenHeight(20),
    backgroundColor: COLORS.dark01,
    width: screenWidth(48),
    height: screenWidth(48),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.borderRadius * 2,
    elevation: 15,
    shadowRadius: screenWidth(50),
    marginBottom: screenHeight(28),
  },
  illustration: { position: "absolute", bottom: 0, right: 0 },
});
