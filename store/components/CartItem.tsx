import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Close } from "../../constants/icons";
import { screenHeight, screenWidth } from "../../constants/theme";
import { CartItem as CartItemType } from "../../data/products";

type CartItemProps = { product: CartItemType };

export default function CartItem({ product }: Readonly<CartItemProps>) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.qtyContainer}>
          <Text>+</Text>
          <Text style={styles.qty}>{product.quantity}</Text>
          <Text>-</Text>
        </View>
        <Pressable onPress={() => console.log("closebutton")}>
          <Close width={screenWidth(14)} height={screenWidth(14)} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: screenWidth(60),
    height: screenWidth(60),
    backgroundColor: COLORS.Light03,
    borderRadius: screenWidth(110),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
    width: screenWidth(54),
    height: screenWidth(54),
  },
  productInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  name: {
    color: COLORS.dark01,
    ...FONTS.h3,
    fontWeight: "600",
    maxWidth: screenWidth(118),
  },
  price: {
    marginTop: screenHeight(4),
    color: COLORS.dark03,
    ...FONTS.body2,
    fontWeight: "300",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(16),
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: screenWidth(88),
    height: screenHeight(40),
    backgroundColor: COLORS.Light05,
    borderRadius: screenWidth(10),
  },
  qty: { color: COLORS.dark01, ...FONTS.h3, fontWeight: "500" },
});
