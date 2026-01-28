import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, SelectCard } from "../../components";
import { COLORS, FONTS, images } from "../../constants";

const SelectScreen = () => {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState(false);

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

  function renderSelectCard() {
    return (
      <>
        <View style={{ marginTop: 60 }}>
          <Text
            style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}
          >
            What do you do?
          </Text>
        </View>
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
            isActive={!isActive}
            onPress={() => setIsActive((isActive) => !isActive)}
          >
            Student
          </SelectCard>
          <SelectCard
            img={images.developer}
            isActive={isActive}
            onPress={() => setIsActive((isActive) => !isActive)}
          >
            Developer
          </SelectCard>
        </View>
      </>
    );
  }

  const handleNextOnPress = () => navigation.navigate("SelectCountryScreen");

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

      {/* Select Card */}
      {renderSelectCard()}

      <Button
        onPress={handleNextOnPress}
        style={{ marginTop: 189, marginBottom: 60 }}
        text="Next"
      />
    </View>
  );
};

export default SelectScreen;
