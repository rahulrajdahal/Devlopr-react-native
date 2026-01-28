import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants";

export default function WelcomeTitle() {
  return (
    <View style={{ width: 199, height: 76, marginTop: 145 }}>
      <Text style={{ color: COLORS.dark01, ...FONTS.h1, fontWeight: "300" }}>
        Welcome
      </Text>
      <Text
        style={{
          color: COLORS.dark01,
          ...FONTS.largeTitle,
          fontWeight: "300",
        }}
      >
        Prateek S.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
