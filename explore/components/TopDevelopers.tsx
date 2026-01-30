import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants";
import DeveloperCard from "./DeveloperCard";

export default function TopDevelopers() {
  return (
    <View style={{ marginTop: 32 }}>
      <Text style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}>
        Top Developers
      </Text>
      <DeveloperCard />
    </View>
  );
}

const styles = StyleSheet.create({});
