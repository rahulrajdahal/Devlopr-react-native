import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";

export default function Banner() {
  return (
    <View
      style={{
        marginTop: 12,
        maxWidth: 327,
        width: "100%",
        height: 264,
        backgroundColor: COLORS.dark02,
        borderRadius: SIZES.borderRadius,
        alignSelf: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 32,
          marginLeft: 32,
        }}
      >
        <Text
          style={{
            color: COLORS.Light01,
            ...FONTS.h2,
            lineHeight: 24,
            fontWeight: "500",
          }}
        >
          Black Friday Sale
        </Text>
        <Text
          style={{
            marginTop: 2,
            color: COLORS.Light01,
            fontSize: 32,
            lineHeight: 32,
            fontWeight: "600",
          }}
        >
          upto 90% off
        </Text>

        <Text
          style={{
            marginTop: 24,
            color: COLORS.Light05,
            ...FONTS.body2,
            lineHeight: 18,
            fontWeight: "normal",
            maxWidth: 179,
            width: "100%",
          }}
        >
          Get upto 90% off on selected items this Black Friday Season with free
          deliveries.
        </Text>

        <View
          style={{
            marginTop: 20,
            backgroundColor: COLORS.dark01,
            width: 48,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.borderRadius * 2,
            elevation: 15,
            shadowRadius: 50,
            marginBottom: 28,
          }}
        >
          <Image source={icons.arrow_right} />
        </View>
      </View>
      <Image
        source={images.shopping}
        style={{ position: "absolute", bottom: 0, right: 0, left: 150 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
