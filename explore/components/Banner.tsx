import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>
          Discover the latest in tech and find awesome developer friends
        </Text>
        <Pressable style={styles.button}>
          <Image source={icons.arrow_right} />
        </Pressable>
      </View>
      <Image source={images.loginIllustration} style={styles.illustration} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: screenHeight(12),
    paddingHorizontal: screenWidth(32),
    maxHeight: screenHeight(264),
    backgroundColor: COLORS.Light05,
    borderRadius: SIZES.borderRadius,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: screenHeight(40),
    width: "100%",
  },
  description: {
    color: COLORS.dark02,
    ...FONTS.h2,
    fontWeight: "500",
    lineHeight: screenWidth(24),
    maxWidth: screenWidth(180),
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: screenWidth(17.52),
    borderRadius: screenWidth(30),
    shadowRadius: screenWidth(50),
    elevation: 16,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: screenWidth(48),
    height: screenWidth(48),
  },
  illustration: {
    maxWidth: 296,
    width: "100%",
    maxHeight: 113,
    height: "100%",
  },
});
