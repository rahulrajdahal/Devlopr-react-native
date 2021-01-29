import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { LargeButton, SelectCard } from "../components";
import { FONTS, COLORS, images } from "../constants";

const Select = ({ navigation }) => {
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
          What do you do?
        </Text>
      </View>
    );
  }

  function renderSelectCard() {
    const [isActive, setIsActive] = useState(false);

    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <SelectCard
          img={images.student}
          isactive={!isActive}
          onPress={() => setIsActive((isActive) => !isActive)}
        >
          Student
        </SelectCard>
        <SelectCard
          img={images.developer}
          isactive={isActive}
          onPress={() => setIsActive((isActive) => !isActive)}
        >
          Developer
        </SelectCard>
      </View>
    );
  }

  function renderNextButton() {
    return (
      <View style={{ marginTop: 189, marginBottom: 60 }}>
        <LargeButton onPress={() => navigation.navigate("SelectCountry")} />
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 24,
      }}
    >
      {/* Welcome Title */}
      {renderWelcomeTitle()}

      {/* Select Question */}
      {renderSelectQuestion()}

      {/* Select Card */}
      {renderSelectCard()}

      {/* Next Button */}
      {renderNextButton()}
    </View>
  );
};

export default Select;
