import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Button } from "../../components";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import WelcomeTitle from "../components/WelcomeTitle";

export default function SelectCountry() {
  const navigation = useNavigation();
  function renderSkipButton() {
    return (
      <View style={{ position: "absolute", top: 32, right: 24, marginTop: 32 }}>
        <Pressable onPress={() => navigation.navigate("BottomNavTab")}>
          <Text
            style={{ color: COLORS.primary, ...FONTS.h3, fontWeight: "500" }}
          >
            Skip
          </Text>
        </Pressable>
      </View>
    );
  }

  function renderWelcomeTitle() {
    return (
      <View style={{ width: 199, height: 76, marginTop: 145 }}>
        <Text style={{ color: COLORS.dark01, ...FONTS.h1, fontWeight: "300" }}>
          Welcome
        </Text>
        <Text
          style={{
            color: COLORS.dark01,
            ...FONTS.largeTitle,
            fontWeight: "300",
          }}
        >
          Prateek S.
        </Text>
      </View>
    );
  }

  function renderSelectQuestion() {
    return (
      <View style={{ marginTop: 60 }}>
        <Text style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}>
          Where are you from?
        </Text>
      </View>
    );
  }

  function renderCountryPicker() {
    return (
      <View
        style={{
          height: 60,
          backgroundColor: COLORS.Light04,
          borderRadius: SIZES.borderRadius,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 18,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image source={icons.uk} />
          <Text
            style={{
              marginLeft: 16,
              color: COLORS.dark03,
              ...FONTS.body1,
              fontWeight: "500",
            }}
          >
            United Kingdom
          </Text>
        </View>
        <Image source={icons.arrow_down} />
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
          gap: SIZES.width * 0.025,
          marginTop: 325,
          marginBottom: 60,
        }}
      >
        <Button
          text="Go Back"
          style={{
            width: SIZES.width * 0.44,
            height: 58,
            backgroundColor: "rgba(70, 109, 232, 0.1)",
          }}
          textProps={{
            style: { color: COLORS.primary },
          }}
          onPress={() => navigation.goBack()}
        />

        <Button
          text="Next"
          style={{
            width: SIZES.width * 0.44,
            height: 58,
            backgroundColor: COLORS.primary,
          }}
          textProps={{
            style: { color: COLORS.white },
          }}
          onPress={() => navigation.navigate("SelectInterestsScreen")}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
        height: "100%",
        width: "100%",
      }}
    >
      {/* Skip Button */}
      {renderSkipButton()}

      <WelcomeTitle />

      {/* Select Question*/}
      {renderSelectQuestion()}

      {/* Country Code Picker */}
      {renderCountryPicker()}

      {/* Control Buttons */}
      {renderRowButtons()}
    </View>
  );
}
