import React from "react";
import { render } from "react-dom";
import { Image, Text, View } from "react-native";
import { SmallButton, TopCard } from "../components";
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
        <View
          style={{
            marginTop: 24,
            marginLeft: 24,
            width: 161,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: COLORS.primary_text,
              ...FONTS.h2,
              lineHeight: 22,
              fontWeight: "500",
            }}
          >
            BootStrap 5 Website Design Challenge
          </Text>
          <Text
            style={{
              marginTop: 7,
              color: COLORS.primary_text,
              ...FONTS.body3,
              lineHeight: 16,
              fontWeight: "400",
              marginBottom: 20,
            }}
          >
            Win Exciting Prizes from our sponsers at Github, Gitlab, Icons8 and
            AWS.
          </Text>
          <SmallButton
            text="Join Challenge"
            textColor={COLORS.white}
            bgcolor={COLORS.primary}
            onPress={() => console.log("Join Challenge")}
          />
        </View>
        <View style={{ position: "relative", bottom: 0, top: 10 }}>
          <Image
            source={images.home}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </View>
      </View>
    );
  }

  function renderTopTitle() {
    return (
      <Text
        style={{
          marginTop: 32,
          color: COLORS.dark02,
          ...FONTS.h3,
          fontWeight: "500",
        }}
      >
        Top This Week
      </Text>
    );
  }

  function renderTopPosts() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <TopCard />
        <TopCard />
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

      {/* Top Title */}
      {renderTopTitle()}

      {/* Top Posts */}
      {renderTopPosts()}
    </View>
  );
};

export default Home;
