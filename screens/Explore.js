import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ExploreCard } from "../components";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const Explore = () => {
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
            maxWidth: 113,
            // width: "100%",
            maxHeight: 152,
            // height: "100%",
            borderRadius: SIZES.borderRadius,
            paddingHorizontal: 21,
            paddingVertical: 30,
            marginRight: 12,
          }}
        >
          <Image source={item.logo} />
          <View>
            <Text>{item.title}</Text>
            <Text numberOfLines={1}>{`${item.topicCount}+topics`}</Text>
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

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Navbar */}
      {renderNavbar()}

      {/* Page Title And Settings */}
      {renderPageTitleRow()}

      {/* header*/}
      {renderHeader()}

      {/* Top Topics By Category */}
      {renderTopPicks()}
    </View>
  );
};

export default Explore;
