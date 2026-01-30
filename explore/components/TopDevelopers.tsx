import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, icons, images } from "../../constants";

export default function TopDevelopers() {
  return (
    <View style={{ marginTop: 32 }}>
      <Text style={{ color: COLORS.dark02, ...FONTS.h3, fontWeight: "500" }}>
        Top Developers
      </Text>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 12,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={images.top_dev} />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: 8,
            }}
          >
            <Text
              style={{
                color: COLORS.dark02,
                ...FONTS.body2,
                fontWeight: "600",
              }}
            >
              Pablo Gurrero
            </Text>
            <Text
              style={{
                color: COLORS.dark03,
                ...FONTS.body3,
                fontWeight: "300",
              }}
            >
              12.5k followers
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              padding: 9.33,
              backgroundColor: COLORS.Light04,
              borderRadius: 12,
              width: 32,
              height: 32,
              marginRight: 8,
            }}
          >
            <Image
              source={icons.github}
              width={13}
              style={{ alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              padding: 9.33,
              backgroundColor: COLORS.Light04,
              borderRadius: 12,
              width: 32,
              height: 32,
              marginRight: 8,
            }}
          >
            <Image
              source={icons.google}
              width={13}
              style={{ alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              padding: 9.33,
              backgroundColor: COLORS.Light04,
              borderRadius: 12,
              width: 32,
              height: 32,
              marginRight: 8,
            }}
          >
            <Image
              source={icons.insta}
              width={13}
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
