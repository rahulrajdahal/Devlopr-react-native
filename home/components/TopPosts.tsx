import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ArticleCard from "../../articles/components/ArticleCard";
import { COLORS, FONTS, SIZES } from "../../constants";
import articles from "../../data/articles";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";

export default function TopPosts() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, "Home">>();

  return (
    <>
      <Text style={styles.title}>Top This Week</Text>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ArticleCard
            article={item}
            onPress={() =>
              navigation.navigate("Article", { articleId: item._id })
            }
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: SIZES.height * 0.01 },
  title: {
    marginTop: 32,
    color: COLORS.dark02,
    ...FONTS.h3,
    fontWeight: "500",
  },
});
