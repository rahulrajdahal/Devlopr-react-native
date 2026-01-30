import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../../constants";

export default function TopPicks() {
  const topics = [
    {
      _id: 1,
      logo: images.vue_logo,
      title: "VueJS",
      topicCount: "1200",
    },
    {
      _id: 2,
      logo: images.python_logo,
      title: "Python",
      topicCount: "800",
    },
    {
      _id: 3,
      logo: images.html_logo,
      title: "HTML5",
      topicCount: "700",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: COLORS.Light04,
          width: 113,
          height: 152,
          borderRadius: SIZES.borderRadius,
          paddingHorizontal: 21,
          paddingVertical: 30,
          marginRight: 12,
        }}
      >
        <Image source={item.logo} />
        <View
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: COLORS.dark02,
              ...FONTS.body2,
              fontWeight: "500",
            }}
          >
            {item.title}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              marginTop: 6,
              color: COLORS.dark03,
              ...FONTS.body3,
              fontWeight: "500",
            }}
          >{`${item.topicCount}+topics`}</Text>
        </View>
      </View>
    );
  };

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
          renderItem={renderItem}
          keyExtractor={(item) => `${item._id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
