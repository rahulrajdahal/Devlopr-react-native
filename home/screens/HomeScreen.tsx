import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import ArticleCard, { Article } from "../../articles/components/ArticleCard";
import { Button, Navbar, ScreenContainer } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import articles from "../../data/articles";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, "Home">;

export default function HomeScreen({ navigation }: Readonly<HomeScreenProps>) {
  function renderChallengeBoard() {
    return (
      <View
        style={{
          marginTop: 34.67,
          width: "100%",
          height: 210,
          backgroundColor: COLORS.Light05,
          borderRadius: SIZES.borderRadius,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginTop: 24,
            marginLeft: 24,
            width: 161,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: COLORS.primary_text,
              ...FONTS.h2,
              lineHeight: 22,
              fontWeight: "500",
            }}
          >
            BootStrap 5 Website Design Challenge
          </Text>
          <Text
            style={{
              marginTop: 7,
              color: COLORS.primary_text,
              ...FONTS.body3,
              lineHeight: 16,
              fontWeight: "400",
              marginBottom: 20,
            }}
          >
            Win Exciting Prizes from our sponsors at Github, Gitlab, Icons8 and
            AWS.
          </Text>
          <Button
            text="Join Challenge"
            textProps={{
              style: {
                color: COLORS.white,
              },
            }}
            style={{ backgroundColor: COLORS.primary }}
            onPress={() => navigation.navigate("Challenge")}
          />
        </View>
        <View style={{ position: "relative", bottom: 0, top: 10 }}>
          <Image
            source={images.home}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </View>
      </View>
    );
  }

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

      {/* Challenge board */}
      {renderChallengeBoard()}

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
