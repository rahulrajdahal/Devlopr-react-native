import React from "react";
import { View, Image, Text } from "react-native";
import { COLORS, icons, images, FONTS } from "../constants";

const Friends = () => {
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

  function renderTitle() {
    return (
      <Text
        style={{
          marginTop: 28,
          color: COLORS.primary_text,
          ...FONTS.h1,
          fontWeight: "300",
          lineHeight: 28,
        }}
      >
        Friends
      </Text>
    );
  }

  return (
    <View
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
      {renderNavbar()}

      {/* Title */}
      {renderTitle()}
    </View>
  );
};

export default Friends;
