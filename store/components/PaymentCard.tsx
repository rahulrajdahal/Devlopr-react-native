import React from "react";
import {
  Pressable,
  PressableProps,
  Text,
  View
} from "react-native";
import { COLORS, FONTS } from "../../constants";
import { CirclesOverlap } from "../../constants/icons";

type PaymentCardProps = PressableProps & {
  bgColor: string;
  card: { leadingPin: string; trailingPin: string; expDate: string };
};

export default function PaymentCard({
  onPress,
  bgColor,
  card,
}: PaymentCardProps) {
  const { leadingPin, trailingPin, expDate } = card;

  return (
    <Pressable
      onPress={onPress}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 20,
        minWidth: 327,
        width: "100%",
        maxHeight: 180,
        height: "100%",
        backgroundColor: bgColor,
        borderRadius: 20,
        marginBottom: 32,
        elevation: 5,
        shadowColor: COLORS.dark04,
        shadowRadius: 55,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CirclesOverlap />
        <Text
          style={{
            color: COLORS.dark04,
            ...FONTS.body3,
            fontWeight: "600",
          }}
        >
          MasterCard
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text
          style={{
            color: COLORS.Light04,
            ...FONTS.h1,
            fontWeight: "normal",
          }}
        >
          {leadingPin}
        </Text>
        <Text
          style={{
            color: COLORS.Light04,
            ...FONTS.h1,
            fontWeight: "normal",
          }}
        >
          ****
        </Text>
        <Text
          style={{
            color: COLORS.Light04,
            ...FONTS.h1,
            fontWeight: "normal",
          }}
        >
          ****
        </Text>
        <Text
          style={{
            color: COLORS.Light04,
            ...FONTS.h1,
            fontWeight: "normal",
          }}
        >
          {trailingPin}
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            color: COLORS.Light04,
            ...FONTS.body2,
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          Mrs. Kelly Francise
        </Text>
        <Text
          style={{
            color: COLORS.dark04,
            ...FONTS.body4,
            fontWeight: "500",
          }}
        >
          {expDate}
        </Text>
      </View>
    </Pressable>
  );
}
