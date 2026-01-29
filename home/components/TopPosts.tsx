import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ArticleCard from "../../articles/components/ArticleCard";
import { SIZES } from "../../constants";
import articles from "../../data/articles";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";

export default function TopPosts() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, "Home">>();

  return (
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
  );
}

const styles = StyleSheet.create({
  container: { marginTop: SIZES.height * 0.01 },
});
