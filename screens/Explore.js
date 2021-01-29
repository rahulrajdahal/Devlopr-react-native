import React from "react";
import { View, Text, Image } from "react-native";
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
    </View>
  );
};

export default Explore;
