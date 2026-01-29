import React from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

type NotificationCardProps = { title: string; desc: string; time: string };

export default function NotificationCard({
  title,
  desc,
  time,
}: Readonly<NotificationCardProps>) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: SIZES.height * 0.024,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View
          style={{
            width: 48,
            height: 48,
            borderRadius: SIZES.borderRadius,
            backgroundColor: COLORS.Light05,
            marginRight: 16,
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: SIZES.height * 0.0002,
          }}
        >
          <Text
            style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}
          >
            {title}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: COLORS.dark03,
              ...FONTS.body2,
              lineHeight: 20,
              fontWeight: "normal",
              width: 263,
            }}
          >
            {desc}
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: COLORS.dark04,
          ...FONTS.body3,
          fontWeight: "500",
        }}
      >
        {time}
      </Text>
    </View>
  );
}
