import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import ArticleCard, { Article } from "../../articles/components/ArticleCard";
import { Navbar, ScreenContainer } from "../../components";
import { COLORS, FONTS } from "../../constants";
import articles from "../../data/articles";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";
import ChallengeBoard from "../components/ChallengeBoard";

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, "Home">;

export default function HomeScreen({ navigation }: Readonly<HomeScreenProps>) {
  function renderTopPosts() {
    return (
      <View
        style={{
          alignSelf: "center",
          maxWidth: 328,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        {articles.map((article: Article) => (
          <ArticleCard
            key={article._id}
            article={article}
            onPress={() =>
              navigation.navigate("Article", { articleId: article._id })
            }
          />
        ))}
      </View>
    );
  }

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

      {/* Top Posts */}
      {renderTopPosts()}
    </ScreenContainer>
  );
}
