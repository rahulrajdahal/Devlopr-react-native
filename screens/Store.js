import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { COLORS, FONTS, images, icons } from "../constants";

const Store = () => {
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
          Marketplace
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.dark04,
              ...FONTS.body3,
              fontWeight: "500",
            }}
          >
            Showing
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 6,
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.body3,
                fontWeight: "500",
              }}
            >
              All
            </Text>
            <Image
              source={icons.arrow_down}
              style={{ width: 6, height: 6, tintColor: COLORS.primary }}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderHeader() {
    return (
      <View>
        <Text>Header</Text>
      </View>
    );
  }

  return (
    <ScrollView
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

      {/* Header */}
      {renderHeader()}
    </ScrollView>
  );
};

export default Store;
