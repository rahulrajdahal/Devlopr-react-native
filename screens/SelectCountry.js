import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import { SmallButton } from "../components";

const SelectCountry = ({ navigation }) => {
  function renderSkipButton() {
    return (
      <View style={{ position: "absolute", top: 32, right: 24, marginTop: 32 }}>
        <TouchableOpacity onPress={() => console.log("Skip")}>
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
          onPress={() => console.log("Go Back")}
        />

        <SmallButton
          text="Next"
          textColor={COLORS.white}
          bgcolor={COLORS.primary}
          onPress={() => console.log("Next")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.Light05,
    borderRadius: 10,
    width: 327,
    height: 60,
  },
  titleText: {
    color: "#fff",
    fontSize: 25,
    marginBottom: 25,
    fontWeight: "bold",
  },
  pickerTitleStyle: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    fontWeight: "bold",
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: COLORS.dark03,
    ...FONTS.body1,
  },
  pickerStyle: {
    height: 60,
    width: 250,
    marginBottom: 10,
    justifyContent: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#303030",
    backgroundColor: "white",
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: "#000",
    textAlign: "right",
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: "#000",
    textAlign: "right",
  },

  searchBarStyle: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 8,
    marginRight: 10,
  },
});

export default SelectCountry;
