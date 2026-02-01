import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { icons } from "../../constants";
import { COLORS, FONTS, screenWidth } from "../../constants/theme";

type BulletProps = { bullet: string };
export default function Bullet({ bullet }: Readonly<BulletProps>) {
  return (
    <View style={styles.container}>
      <Image source={icons.bullet} />
      <Text style={styles.bullet}>{bullet}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(14),
  },
  bullet: {
    color: COLORS.dark03,
    ...FONTS.body1,
    fontWeight: "normal",
  },
});
