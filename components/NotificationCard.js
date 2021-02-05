import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const NotificationCard = ({ notification }) => {
  const { title, desc, time } = notification;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: 24,
      }}
    >
      <View
        style={{
          width: 48,
          height: 48,
          borderRadius: SIZES.borderRadius,
          backgroundColor: COLORS.Light05,
          marginRight: 16,
        }}
      ></View>
      <View
        style={{ display: "flex", alignItems: "flex-start", width: "100%" }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Text
            style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}
          >
            {title}
          </Text>
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
  );
};

export default NotificationCard;
