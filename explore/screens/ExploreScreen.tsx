import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Navbar, ScreenContainer } from "../../components";
import { COLORS, FONTS, icons } from "../../constants";
import Banner from "../components/Banner";
import TopDevelopers from "../components/TopDevelopers";
import TopPicks from "../components/TopPicks";

export default function ExploreScreen() {
  return (
    <ScreenContainer>
      {/* Navbar */}
      <Navbar />

      <View style={styles.topContainer}>
        <Text
          style={{
            color: COLORS.primary_text,
            ...FONTS.h1,
            fontWeight: "300",
            lineHeight: 28,
          }}
        >
          Explore
        </Text>

        <Image source={icons.settings} />
      </View>

      <Banner />
      <TopPicks />
      <TopDevelopers />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 28,
  },
});
