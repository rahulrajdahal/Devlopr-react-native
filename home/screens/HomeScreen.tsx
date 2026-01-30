import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Navbar, ScreenContainer } from "../../components";
import { COLORS } from "../../constants";
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
      <TopPosts />
    </ScreenContainer>
  );
}
