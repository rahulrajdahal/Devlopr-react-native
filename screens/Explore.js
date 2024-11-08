import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Navbar } from "../components";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const Explore = ({ navigation }) => {
  function renderPageTitleRow() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 28,
        }}
      >
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
    );
  }

  function renderHeader() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 12,
          paddingHorizontal: 32,
          maxWidth: 327,
          width: "100%",
          maxHeight: 264,
          height: "100%",
          backgroundColor: COLORS.Light05,
          borderRadius: SIZES.borderRadius,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <Text
            style={{
              color: COLORS.dark02,
              ...FONTS.h2,
              fontWeight: "500",
              lineHeight: 24,
              maxWidth: 180,
              width: "100%",
              maxHeight: 72,
              height: "100%",
            }}
          >
            Discover the latest in tech and find awesome developer friends
          </Text>
          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: 17.52,
              borderRadius: 30,
              shadowRadius: 50,
              elevation: 15,
              shadowColor: "rgba(0, 0, 0, 0.25)",
              width: 48,
              height: 48,
              marginLeft: 35,
            }}
          >
            <Image source={icons.arrow_right} />
          </View>
        </View>
        <Image
          source={images.loginIllustration}
          style={{
            maxWidth: 296,
            width: "100%",
            maxHeight: 113,
            height: "100%",
          }}
        />
      </View>
    );
  }

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
                width="13"
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
                width="13"
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
                width="13"
                style={{ alignSelf: "center" }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Title And Settings */}
      {renderPageTitleRow()}

      {/* header*/}
      {renderHeader()}

      {/* Top Topics By Category */}
      {renderTopPicks()}

      {/* Top Developers */}
      {renderTopDevelopers()}
    </ScrollView>
  );
};

export default Explore;
