import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import { SmallButton } from "../components";

const SelectCountry = ({ navigation }) => {
  function renderSkipButton() {
    return (
      <View style={{ position: "absolute", top: 32, right: 24, marginTop: 32 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text
            style={{ color: COLORS.primary, ...FONTS.h3, fontWeight: "500" }}
          >
            Skip
          </Text>
        </TouchableOpacity>
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
          width: 327,
          width: "100%",
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
          marginTop: 325,
          marginBottom: 60,
        }}
      >
        <SmallButton
          text="Go Back"
          textColor={COLORS.primary}
          bgcolor="rgba(70, 109, 232, 0.1)"
          onPress={() => navigation.goBack()}
        />

        <SmallButton
          text="Next"
          textColor={COLORS.white}
          bgcolor={COLORS.primary}
          onPress={() => navigation.navigate("SelectInterests")}
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

      {/* Welcome Title */}
      {renderWelcomeTitle()}

      {/* Select Question*/}
      {renderSelectQuestion()}

      {/* Country Code Picker */}
      {renderCountryPicker()}

      {/* Control Buttons */}
      {renderRowButtons()}
    </View>
  );
};

export default SelectCountry;
