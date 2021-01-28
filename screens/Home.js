import React from "react";
import { View, Text, Image } from "react-native";
import { SmallButton } from "../components";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";

const Home = () => {
  function renderLoginIllustration() {
    return (
      <View
        style={{
          width: 375,
          height: 156,
          marginTop: 148,
        }}
      >
        <Image source={images.loginIllustration} />
      </View>
    );
  }

  function renderWelcomeTitle() {
    return (
      <View style={{ width: 153, height: 76, marginTop: 68 }}>
        <Text style={{ fontWeight: "300", color: COLORS.dark01, ...FONTS.h1 }}>
          Welcome to
        </Text>
        <Text
          style={{
            color: COLORS.dark01,
            ...FONTS.largeTitle,
            fontWeight: "300",
          }}
        >
          Devlopr
        </Text>
      </View>
    );
  }

  function renderWelcomeBody() {
    return (
      <View
        style={{
          width: 327,
          height: 120,
          marginTop: 16,
        }}
      >
        <Text style={{ color: COLORS.dark03, ...FONTS.body1, lineHeight: 24 }}>
          Meet Devlopr - an all in one hub for aspiring developers to learn
          programming and get expert advice on the industry.
        </Text>
        <Text style={{ color: COLORS.dark03, ...FONTS.body1, marginTop: 16 }}>
          All for FREE.
        </Text>
      </View>
    );
  }

  function renderRowButtons() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 108,
          marginBottom: 60,
        }}
      >
        <SmallButton
          bgcolor={COLORS.Light05}
          textColor={COLORS.dark02}
          text="Google"
          icon={icons.google}
        />
        <SmallButton
          bgcolor={COLORS.Light05}
          textColor={COLORS.dark02}
          text="Github"
          icon={icons.github}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.paddingHorizontal,
      }}
    >
      {/* Illustration Icon */}
      {renderLoginIllustration()}

      {/* Welcome Title */}
      {renderWelcomeTitle()}

      {/* Welcome Body */}
      {renderWelcomeBody()}

      {/* Row Buttons */}
      {renderRowButtons()}
    </View>
  );
};

export default Home;
