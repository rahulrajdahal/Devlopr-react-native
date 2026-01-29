import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Navbar, ScreenContainer } from "../components";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import Banner from "../explore/components/Banner";

export default function ExploreScreen({ navigation }) {
  function renderTopPicks() {
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

  function renderTopDevelopers() {
    return (
      <View style={{ marginTop: 32 }}>
        <Text style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}>
          Top Developers
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image source={images.top_dev} />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginLeft: 8,
              }}
            >
              <Text
                style={{
                  color: COLORS.dark02,
                  ...FONTS.body2,
                  fontWeight: "600",
                }}
              >
                Pablo Gurrero
              </Text>
              <Text
                style={{
                  color: COLORS.dark03,
                  ...FONTS.body3,
                  fontWeight: "300",
                }}
              >
                12.5k followers
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                padding: 9.33,
                backgroundColor: COLORS.Light04,
                borderRadius: 12,
                width: 32,
                height: 32,
                marginRight: 8,
              }}
            >
              <Image
                source={icons.github}
                width={13}
                style={{ alignSelf: "center" }}
              />
            </View>
            <View
              style={{
                padding: 9.33,
                backgroundColor: COLORS.Light04,
                borderRadius: 12,
                width: 32,
                height: 32,
                marginRight: 8,
              }}
            >
              <Image
                source={icons.google}
                width={13}
                style={{ alignSelf: "center" }}
              />
            </View>
            <View
              style={{
                padding: 9.33,
                backgroundColor: COLORS.Light04,
                borderRadius: 12,
                width: 32,
                height: 32,
                marginRight: 8,
              }}
            >
              <Image
                source={icons.insta}
                width={13}
                style={{ alignSelf: "center" }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <ScreenContainer>
      {/* Navbar */}
      <Navbar />

      <View style={styles.topContainer}>
        <Text
          style={{
            color: COLORS.primary_text,
            ...FONTS.h1,
            fontWeight: "300",
            lineHeight: 28,
          }}
        >
          Explore
        </Text>

        <Image source={icons.settings} />
      </View>

      <Banner />

      {/* Top Topics By Category */}
      {renderTopPicks()}

      {/* Top Developers */}
      {renderTopDevelopers()}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 28,
  },
});
