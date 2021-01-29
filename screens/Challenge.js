import React from "react";
import { View, Image, Text } from "react-native";
import { SmallButton } from "../components";
import { COLORS, images, icons, SIZES, FONTS } from "../constants";

const Challenge = () => {
  function renderNavbar() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 40,
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

  function renderTitle() {
    return (
      <Text
        style={{
          maxWidth: 215,
          width: "100%",
          maxHeight: 48,
          height: "100%",
          color: COLORS.primary_text,
          marginTop: 24,
          ...FONTS.h1,
          fontWeight: "500",
        }}
      >
        Bootstrap 5 Website Design Challenge
      </Text>
    );
  }

  function renderPrize() {
    return (
      <Text
        style={{
          marginTop: 8,
          color: COLORS.dark03,
          ...FONTS.body3,
          fontWeight: "normal",
          lineHeight: 16,
          maxWidth: 215,
          width: "100%",
          maxHeight: 32,
          height: "100%",
        }}
      >
        Win Exciting Prizes from our sponsers at Github, Gitlab, Icons8 and AWS.
      </Text>
    );
  }

  function renderFirstPara() {
    return (
      <Text
        style={{
          maxWidth: 279,
          width: "100%",
          maxHeight: 200,
          height: "100%",
          marginTop: 32,
          color: COLORS.dark02,
          ...FONTS.body2,
          lineHeight: 20,
        }}
      >
        This month on Devlopr, anyone with the passion for web design can enter
        the Bootstrap 5 Website Design Challenge. The top designs will get
        exciting prizes from Github, Gitlab, Icons8 and AWS. In order to
        qualify, you must use the Bootstrap 5 framwork to design your website.
        You can design any type of website, be it portfolio, eCommerce, Landing
        Pages, etc.
      </Text>
    );
  }

  function renderBulletPoints() {
    const points = [
      {
        _id: 1,
        desc: "Design the Website using Bootstrap 5",
      },
      {
        _id: 2,
        desc: "Upload Repo on Github or Gitlab",
      },
      {
        _id: 3,
        desc: "Submit Link on the Challenge Page",
      },
      {
        _id: 4,
        desc: "Wait till you hear from us",
      },
    ];

    return (
      <View style={{ marginTop: 24, display: "flex", flexDirection: "column" }}>
        {points.map((point) => (
          <View
            key={point._id}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Image source={icons.bullet} style={{ marginRight: 9.67 }} />
            <Text
              style={{
                color: COLORS.dark02,
                ...FONTS.body2,
                fontWeight: "normal",
                lineHeight: 20,
              }}
            >
              {point.desc}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  function renderButtonAndIllustration() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "relative",
            left: 0,
            top: 64,
            marginRight: 11,
          }}
        >
          <SmallButton
            text="Start Challenge"
            bgcolor={COLORS.primary}
            textColor={COLORS.white}
          />
        </View>
        <Image
          source={images.home}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            top: 30,
          }}
        />
      </View>
    );
  }

  function renderChallengeBoard() {
    return (
      <View
        style={{
          marginTop: 34.67,
          backgroundColor: COLORS.Light05,
          width: "100%",
          maxHeight: 620,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: SIZES.borderRadius,
          alignSelf: "center",
          paddingHorizontal: 24,
        }}
      >
        {/* Title */}
        {renderTitle()}

        {/* Prize */}
        {renderPrize()}

        {/* First Paragraph */}
        {renderFirstPara()}

        {/* Bullet Points */}
        {renderBulletPoints()}

        {/* ButtonAndIllustrationRow */}
        {renderButtonAndIllustration()}
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

      {/* Challenge Board */}
      {renderChallengeBoard()}
    </View>
  );
};

export default Challenge;
