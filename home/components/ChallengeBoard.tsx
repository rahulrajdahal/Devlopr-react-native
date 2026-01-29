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
    <View
      style={{
        marginTop: 34.67,
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
      <View style={{ position: "relative", bottom: 0, top: 10 }}>
        <Image
          source={images.home}
          style={{ position: "absolute", bottom: 0, right: 0 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
