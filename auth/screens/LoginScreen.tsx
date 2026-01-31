import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { Button, ScreenContainer } from "../../components";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";

const LoginScreen = () => {
  const navigation = useNavigation();

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
          gap: screenWidth(12),
          marginTop: screenHeight(108),
          marginBottom: screenHeight(60),
        }}
      >
        <Button
          text="Google"
          style={{
            width: SIZES.width / 2 - 30,
            backgroundColor: COLORS.Light05,
          }}
          textProps={{ style: { color: COLORS.dark02 } }}
          onPress={() => navigation.navigate("SelectScreen")}
          icon={icons.google}
        />
        <Button
          style={{
            width: SIZES.width / 2 - 30,
            backgroundColor: COLORS.Light05,
          }}
          textProps={{
            style: {
              color: COLORS.dark02,
            },
          }}
          text="Github"
          icon={icons.github}
          onPress={() => console.log("New Button")}
        />
      </View>
    );
  }

  return (
    <ScreenContainer
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
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
    </ScreenContainer>
  );
};

export default LoginScreen;
