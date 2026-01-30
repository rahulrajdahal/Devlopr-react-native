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

      {/* <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      > */}
      <Image source={image} style={styles.image} />
      {/* </View> */}

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
    minWidth: 164,
    width: "100%",
    maxHeight: 164,
    height: "100%",
    borderWidth: 1,
    borderColor: COLORS.Light05,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  loveButton: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.Light05,
    borderRadius: SIZES.borderRadius,
    padding: 6.25,
    position: "absolute",
    top: 10,
    right: 10,
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    right: 12,
    left: 12,
    bottom: 12,
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
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

// alignSelf: "center" }
