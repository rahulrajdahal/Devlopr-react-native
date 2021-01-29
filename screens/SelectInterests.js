import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../constants";
import { IconCard } from "../components";
import { useState } from "react";

const SelectInterests = () => {
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
          Where are your Interests?
        </Text>
      </View>
    );
  }

  function renderInterestCards() {
    const [isActive, setIsActive] = useState(false);

    const interestesTitles = [
      {
        _id: 1,
        title: "Web Development",
      },
      {
        _id: 2,
        title: "Backend",
      },
      {
        _id: 3,
        title: "Frontend",
      },
      {
        _id: 4,
        title: "Artificial Intelligence",
      },
      {
        _id: 5,
        title: "Machine Learning",
      },
      {
        _id: 6,
        title: "Database",
      },
      {
        _id: 7,
        title: "Design",
      },
      {
        _id: 8,
        title: "Internet of Things",
      },
    ];

    return (
      <View
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 325,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {interestesTitles.map((interestesTitle) => (
          <IconCard text={interestesTitle.title} />
        ))}
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        paddingHorizontal: 24,
      }}
    >
      {/* Skip Button */}
      {renderSkipButton()}

      {/* Welcome Title */}
      {renderWelcomeTitle()}

      {/* Select Question */}
      {renderSelectQuestion()}

      {/* Interest Cards */}
      {renderInterestCards()}
    </View>
  );
};

export default SelectInterests;
