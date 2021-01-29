import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, images, icons, FONTS, SIZES } from "../constants";

const Article = ({ route, navigation }) => {
  const [article, setArticle] = useState(1);

  useEffect(() => {
    let { article } = route.params;
    setArticle(article);
  }, [article]);

  function renderNavbar() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <Image source={icons.category} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={icons.notification} style={{ marginRight: 27.5 }} />
          <Image source={images.profile} />
        </View>
      </View>
    );
  }

  function renderHeaderRow() {
    return (
      <View
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{ color: COLORS.primary, ...FONTS.body3, fontWeight: "500" }}
        >
          {article.category}
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: COLORS.dark04,
            borderRadius: SIZES.borderRadius,
            paddingHorizontal: 7,
            paddingVertical: 5,
          }}
        >
          <Image source={icons.love} style={{ marginRight: 2.83 }} />
          <Text
            style={{ color: COLORS.dark04, ...FONTS.body4, fontWeight: "500" }}
          >
            {article.likes}
          </Text>
        </View>
      </View>
    );
  }

  function renderArticleTitle() {
    return (
      <View style={{ marginTop: 6 }}>
        <Text
          style={{ color: COLORS.primary_text, ...FONTS.h1, fontWeight: "500" }}
        >
          {article.title}
        </Text>
      </View>
    );
  }

  function renderPosterInfo() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Image source={article.avatar} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 8,
          }}
        >
          <Text
            style={{ color: COLORS.dark03, fontWeight: "500", ...FONTS.body3 }}
          >
            {article.poster}
          </Text>
          <Text
            style={{
              marginTop: 2,
              color: COLORS.dark04,
              fontWeight: "500",
              ...FONTS.body4,
            }}
          >
            {article.date}
          </Text>
        </View>
      </View>
    );
  }

  function renderJumbotron() {
    return (
      <View
        style={{
          marginTop: 24,
          maxWidth: 327,
          width: "100%",
          maxHeight: 189,
          height: "100%",
          borderRadius: 10,
          alignSelf: "center",
        }}
      >
        <Image source={article.jumbotron} />
      </View>
    );
  }

  function renderDescription() {
    return (
      <View style={{ marginTop: 24, maxWidth: 327, width: "100%" }}>
        <Text
          style={{
            color: COLORS.dark03,
            ...FONTS.body1,
            fontWeight: "normal",
            lineHeight: 24,
          }}
        >
          {article.content}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Navbar */}
      {renderNavbar()}

      {/* Category and Likes Row */}
      {renderHeaderRow()}

      {/* Article Title */}
      {renderArticleTitle()}

      {/* Poster Info */}
      {renderPosterInfo()}

      {/* Jumbotron */}
      {renderJumbotron()}

      {/* Description */}
      {renderDescription()}
    </ScrollView>
  );
};

export default Article;
