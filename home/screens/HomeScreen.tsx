import React from "react";
import { Navbar, ScreenContainer } from "../../components";
import { COLORS } from "../../constants";
import ChallengeBoard from "../components/ChallengeBoard";
import TopPosts from "../components/TopPosts";

export default function HomeScreen() {
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
