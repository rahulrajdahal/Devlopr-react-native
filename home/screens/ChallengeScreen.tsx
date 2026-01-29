import { Image, Text, View } from "react-native";
import { Button } from "../../components";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";

const challengePoints = [
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
export default function ChallengeScreen() {
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
        <Button
          text="Start Challenge"
          style={{
            backgroundColor: COLORS.primary,
            marginTop: screenHeight(80),
            paddingHorizontal: screenWidth(16),
            paddingVertical: screenHeight(4),
          }}
          textProps={{
            style: { color: COLORS.white },
          }}
        />
        <Image
          source={images.home}
          style={{
            position: "absolute",
            bottom: screenHeight(-50),
            right: screenWidth(-24),
          }}
        />
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
        <Text
          style={{
            color: COLORS.primary_text,
            marginTop: screenHeight(24),
            ...FONTS.h1,
            fontWeight: "500",
          }}
        >
          Bootstrap 5 Website Design Challenge
        </Text>

        <Text
          style={{
            marginTop: screenHeight(8),
            color: COLORS.dark03,
            ...FONTS.body3,
            fontWeight: "normal",
            lineHeight: screenWidth(16),
          }}
        >
          Win Exciting Prizes from our sponsers at Github, Gitlab, Icons8 and
          AWS.
        </Text>

        <Text
          style={{
            marginTop: screenHeight(32),
            color: COLORS.dark02,
            ...FONTS.body2,
            lineHeight: screenWidth(20),
          }}
        >
          This month on Devlopr, anyone with the passion for web design can
          enter the Bootstrap 5 Website Design Challenge. The top designs will
          get exciting prizes from Github, Gitlab, Icons8 and AWS. In order to
          qualify, you must use the Bootstrap 5 framwork to design your website.
          You can design any type of website, be it portfolio, eCommerce,
          Landing Pages, etc.
        </Text>

        <View
          style={{ marginTop: 24, display: "flex", flexDirection: "column" }}
        >
          {challengePoints.map((ChallengePoint) => (
            <View
              key={ChallengePoint._id}
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
                {ChallengePoint.desc}
              </Text>
            </View>
          ))}
        </View>

        {/* ButtonAndIllustrationRow */}
        {renderButtonAndIllustration()}
      </View>
    </View>
  );
}
