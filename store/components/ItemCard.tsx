import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";

type ItemCardProps = PressableProps & {
  image: ImageSourcePropType;
  name: string;
  price: number;
};

export default function ItemCard({
  image,
  name,
  price,
  ...props
}: ItemCardProps) {
  return (
    <Pressable
      {...props}
      style={StyleSheet.flatten([styles.container, props.style])}
    >
      <Pressable style={styles.loveButton}>
        <Image source={icons.love} style={{ alignSelf: "center" }} />
      </Pressable>

      <Image
        source={image}
        style={{
          objectFit: "contain",
        }}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.productInfoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>

        <Pressable style={styles.add}>
          <Image source={icons.plus} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: screenWidth(164),
    minHeight: screenHeight(164),
    borderWidth: 1,
    borderColor: COLORS.Light05,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loveButton: {
    width: screenWidth(20),
    height: screenWidth(20),
    backgroundColor: COLORS.Light05,
    borderRadius: SIZES.borderRadius,
    padding: screenWidth(6.25),
    position: "absolute",
    top: screenHeight(10),
    right: screenWidth(10),
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    right: 0,
    left: screenWidth(12),
    bottom: screenHeight(12),
  },
  productInfoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: COLORS.primary_text,
    ...FONTS.body2,
    fontWeight: "normal",
  },
  price: {
    color: COLORS.dark03,
    ...FONTS.body3,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginTop: 3,
  },
  add: {
    backgroundColor: COLORS.white,
    shadowColor: "rgba(64, 72, 95, 0.14)",
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 12,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

// alignSelf: "center" }
