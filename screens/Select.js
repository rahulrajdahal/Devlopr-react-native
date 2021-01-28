import React from "react";
import { Text, View } from "react-native";
import { FONTS, COLORS } from "../constants";

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
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Card1</Text>
        <Text>Card2</Text>
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
    </View>
  );
};

export default Select;
