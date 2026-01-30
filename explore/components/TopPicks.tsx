import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, images } from "../../constants";
import CategoryCard from "./CategoryCard";

export default function TopPicks() {
  const topics = [
    {
      _id: 1,
      logo: images.vue_logo,
      title: "VueJS",
      count: 1200,
    },
    {
      _id: 2,
      logo: images.python_logo,
      title: "Python",
      count: 800,
    },
    {
      _id: 3,
      logo: images.html_logo,
      title: "HTML5",
      count: 700,
    },
  ];

  return (
    <View style={{ marginTop: 32 }}>
      <Text style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}>
        Top Topics by Category
      </Text>

      <View
        style={{
          marginTop: 12,
          marginRight: 12,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <FlatList
          data={topics}
          renderItem={({ item }) => <CategoryCard category={item} />}
          keyExtractor={(item) => `${item._id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
