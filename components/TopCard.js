import React from "react";
import { render } from "react-dom";
import { View, Text, Image } from "react-native";
import { COLORS, FONTS, icons, images } from "../constants";

const TopCard = ({ avatar, category, likesCount, title, poster, date }) => {
  function renderCardHeader() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 24,
        }}
      >
        <Text
          style={{ color: COLORS.primary, ...FONTS.body3, fontWeight: "500" }}
        >
          {category}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={icons.love} />
          <Text
            style={{ color: COLORS.dark04, ...FONTS.body4, fontWeight: "500" }}
          >
            {likesCount}
          </Text>
        </View>
      </View>
    );
  }

  function renderCardTitle() {
    return (
      <Text
        numberOfLines={2}
        style={{
          marginTop: 18,
          color: COLORS.primary_text,
          ...FONTS.h2,
          lineHeight: 22,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    );
  }

  function renderPosterInfo() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 24,
          marginBottom: 18,
        }}
      >
        <Image source={avatar} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 8,
          }}
        >
          <Text
            style={{ color: COLORS.dark03, fontWeight: "500", ...FONTS.body3 }}
          >
            {poster}
          </Text>
          <Text
            style={{ color: COLORS.dark04, fontWeight: "500", ...FONTS.body4 }}
          >
            {date}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        maxWidth: 164,
        width: "100%",
        maxHeight: 164,
        height: "100%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: COLORS.Light05,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 16,
      }}
    >
      {/* Card Header*/}
      {renderCardHeader()}

      {/* Card Title */}
      {renderCardTitle()}

      {/* Poster Info */}
      {renderPosterInfo()}
    </View>
  );
};

export default TopCard;
