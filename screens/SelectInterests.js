import React, { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../constants";
import { IconCard, SmallButton } from "../components";

const SelectInterests = ({ navigation }) => {
  function renderSkipButton() {
    return (
      <View style={{ position: "absolute", top: 32, right: 24, marginTop: 32 }}>
        <TouchableOpacity onPress={() => navigation.navigate("BottomNavTab")}>
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
    const interestsTitles = [
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
        {interestsTitles.map((interestsTitle) => (
          <IconCard key={interestsTitle._id} text={interestsTitle.title} />
        ))}
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
          marginTop: 135,
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
          text="Finish"
          textColor={COLORS.white}
          bgcolor={COLORS.primary}
          onPress={() => navigation.navigate("BottomNavTab")}
        />
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

      {/* RowButtons */}
      {renderRowButtons()}
    </View>
  );
};

export default SelectInterests;
