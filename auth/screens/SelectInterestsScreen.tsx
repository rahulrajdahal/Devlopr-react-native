import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { IconCard } from "../../components";
import { COLORS, FONTS } from "../../constants";
import ActionButtons from "../components/ActionButtons";
import WelcomeTitle from "../components/WelcomeTitle";

export default function SelectInterestsScreen() {
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

      <WelcomeTitle />

      <View style={{ marginTop: 60 }}>
        <Text style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}>
          Where are your Interests?
        </Text>
      </View>

      {/* Interest Cards */}
      {renderInterestCards()}

      <ActionButtons
        style={{ marginTop: 200 }}
        primaryButtonProps={{
          text: "Finish",
          navigationScreen: "BottomNavTab",
        }}
      />
    </View>
  );
}
