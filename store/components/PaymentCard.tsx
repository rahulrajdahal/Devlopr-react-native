import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS } from "../../constants";
import { CirclesOverlap } from "../../constants/icons";
import { screenHeight, screenWidth } from "../../constants/theme";

type PaymentCardProps = PressableProps & {
  bgColor: string;
  card: { leadingPin: string; trailingPin: string; expDate: string };
};

export default function PaymentCard({
  onPress,
  bgColor,
  card,
  ...props
}: PaymentCardProps) {
  const { leadingPin, trailingPin, expDate } = card;

  return (
    <Pressable
      onPress={onPress}
      style={StyleSheet.flatten([
        styles.container,
        {
          backgroundColor: bgColor,
        },
        props.style,
      ])}
    >
      <View style={styles.topRow}>
        <CirclesOverlap />
        <Text style={styles.cardType}>MasterCard</Text>
      </View>

      <View style={styles.pinContainer}>
        <Text style={styles.pin}>{leadingPin}</Text>
        <Text style={styles.hidden}>****</Text>
        <Text style={styles.hidden}>****</Text>
        <Text style={styles.pin}>{trailingPin}</Text>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.user}>Mrs. Kelly Francise</Text>
        <Text style={styles.expDate}>{expDate}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: screenWidth(24),
    paddingVertical: screenHeight(20),
    gap: screenHeight(20),
    borderRadius: screenWidth(20),
    elevation: 5,
    shadowColor: COLORS.dark04,
    shadowRadius: screenWidth(56),
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  cardType: {
    color: COLORS.dark04,
    ...FONTS.body3,
    fontWeight: "600",
  },
  pinContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(20),
  },
  pin: {
    color: COLORS.Light04,
    ...FONTS.h1,
    fontWeight: "normal",
  },
  hidden: {
    color: COLORS.Light04,
    ...FONTS.h1,
    fontWeight: "normal",
  },
  userInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  user: {
    color: COLORS.Light04,
    ...FONTS.body2,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  expDate: {
    color: COLORS.dark04,
    ...FONTS.body4,
    fontWeight: "500",
  },
});
