import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS, icons } from "../../constants";

export type Article = {
  _id: number;
  category: string;
  likes: number;
  title: string;
  poster: string;
  date: string;
  avatar: ImageSourcePropType;
  jumbotron: ImageSourcePropType;
  content: string;
};

type ArticleCardProps = PressableProps & { article: Article };

export default function ArticleCard({
  article,
  ...props
}: Readonly<ArticleCardProps>) {
  function renderCardHeader() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 24,
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
          }}
        >
          <Image source={icons.love} />
          <Text
            style={{
              color: COLORS.dark04,
              ...FONTS.body4,
              fontWeight: "500",
              marginLeft: 2.83,
            }}
          >
            {article.likes}
          </Text>
        </View>
      </View>
    );
  }

  function renderCardTitle() {
    return (
      <Text
        numberOfLines={2}
        style={{
          marginTop: 18,
          color: COLORS.primary_text,
          ...FONTS.h2,
          lineHeight: 22,
          fontWeight: "500",
        }}
      >
        {article.title}
      </Text>
    );
  }

  function renderPosterInfo() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 24,
          marginBottom: 18,
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
            style={{ color: COLORS.dark04, fontWeight: "500", ...FONTS.body4 }}
          >
            {article.date}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <Pressable
      {...props}
      style={StyleSheet.flatten([
        {
          backgroundColor: COLORS.white,
          width: "50%",
          maxHeight: 164,
          height: "100%",
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: COLORS.Light05,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        },
        props.style,
      ])}
    >
      {/* Card Header*/}
      {renderCardHeader()}

      {/* Card Title */}
      {renderCardTitle()}

      {/* Poster Info */}
      {renderPosterInfo()}
    </Pressable>
  );
}

const styles = StyleSheet.create({});
