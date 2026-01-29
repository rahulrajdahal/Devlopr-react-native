import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { Navbar, ScreenContainer } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import ChallengeBoard from "../components/ChallengeBoard";
import TopPosts from "../components/TopPosts";

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, "Home">;

export default function HomeScreen({ navigation }: Readonly<HomeScreenProps>) {
  return (
    <ScreenContainer
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      <Navbar />

      <ChallengeBoard />

      <Text
        style={{
          marginTop: 32,
          color: COLORS.dark02,
          ...FONTS.h3,
          fontWeight: "500",
        }}
      >
        Top This Week
      </Text>

      <TopPosts />
    </ScreenContainer>
  );
}
