import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { NoNotification } from "../../constants/images";

export default function EmptyNotifications() {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <NoNotification
        style={{
          width: "100%",
          alignSelf: "center",
          marginHorizontal: 39,
          marginTop: 101,
        }}
      />
      <Text
        style={{
          color: COLORS.dark01,
          ...FONTS.h2,
          fontWeight: "500",
          textTransform: "capitalize",
          marginTop: 40,
        }}
      >
        No New Notification
      </Text>
      <Text
        style={{
          width: 280,
          color: COLORS.dark03,
          ...FONTS.body2,
          fontWeight: "300",
          lineHeight: 20,
          textAlign: "center",
          marginTop: 6,
        }}
      >
        There aren’t any new notifications for you at the moment. They will
        appear here once you do.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
