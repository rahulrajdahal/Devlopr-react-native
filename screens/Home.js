import React from "react";
import { Image, Text, View } from "react-native";
import { SmallButton } from "../components";
import { icons, FONTS, COLORS, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  function renderNavbar() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 32,
        }}
      >
        <Image source={icons.category} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={icons.notification} style={{ marginRight: 27.5 }} />
          <Image source={images.profile} />
        </View>
      </View>
    );
  }

  function renderChallengeBoard() {
    return (
      <View
        style={{
          marginTop: 34.67,
          width: 327,
          width: "100%",
          height: 210,
          backgroundColor: COLORS.Light05,
          borderRadius: SIZES.borderRadius,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View>
          <Text>TItle</Text>
          <Text>Body</Text>
          <SmallButton
            text="Join Challenge"
            textColor={COLORS.white}
            bgcolor={COLORS.primary}
            onPress={() => console.log("Join Challenge")}
          />
        </View>
        <View>
          <Image
            source={images.home}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Navbar */}
      {renderNavbar()}

      {/* Challenge board */}
      {renderChallengeBoard()}
    </View>
  );
};

export default Home;
