import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { HomeStackParamList } from "../../navigations/HomeStackScreen";

export default function ChallengeBoard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, "Home">>();

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>BootStrap 5 Website Design Challenge</Text>
        <Text style={styles.description}>
          Win Exciting Prizes from our sponsors at Github, Gitlab, Icons8 and
          AWS.
        </Text>
        <Button
          text="Join Challenge"
          textProps={{
            style: {
              color: COLORS.white,
            },
          }}
          style={{ backgroundColor: COLORS.primary }}
          onPress={() => navigation.navigate("Challenge")}
        />
      </View>
      <Image source={images.home} style={styles.illustration} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34.67,
    width: "100%",
    height: 210,
    backgroundColor: COLORS.Light05,
    borderRadius: SIZES.borderRadius,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  infoContainer: {
    marginTop: 24,
    marginLeft: 24,
    width: 161,
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: COLORS.primary_text,
    ...FONTS.h2,
    lineHeight: 22,
    fontWeight: "500",
  },
  description: {
    marginTop: 7,
    color: COLORS.primary_text,
    ...FONTS.body3,
    lineHeight: 16,
    fontWeight: "400",
    marginBottom: 20,
  },
  illustration: { position: "absolute", bottom: -10, right: 0 },
});
