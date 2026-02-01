import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Navbar, NotFound, ScreenContainer } from "../../components";
import { COLORS, icons } from "../../constants";
import { FONTS, screenHeight, screenWidth } from "../../constants/theme";
import products from "../../data/products";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import Bullet from "../components/Bullet";
import CartButton from "../components/CartButton";

type ProductDetailProps = NativeStackScreenProps<
  StoreStackParamList,
  "ProductDetail"
>;

export default function ProductDetailScreen({
  route,
}: Readonly<ProductDetailProps>) {
  const [addToCart, setAddToCart] = useState(false);

  const {
    params: { productId },
  } = route;

  const product = useMemo(() => {
    return products.find((product) => product._id === productId);
  }, [productId]);

  if (!product) {
    return <NotFound />;
  }

  return (
    <ScreenContainer>
      <Navbar />

      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
      </View>

      <View style={styles.priceNameContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>$ {product.price}</Text>
      </View>

      <View>
        <Text style={styles.description}>{product.desc}</Text>

        <View style={styles.bulletsContainer}>
          {product.bullets.map((bullet) => (
            <Bullet key={bullet} bullet={bullet} />
          ))}
        </View>
      </View>

      <Button
        text={addToCart ? "Added to Cart" : "Add to Cart"}
        icon={addToCart ? icons.check_active : icons.plus}
        onPress={() => setAddToCart((prev) => !prev)}
        style={{
          backgroundColor: addToCart ? COLORS.primary : COLORS.white,
          alignSelf: "center",
          paddingVertical: screenHeight(12),
          marginTop: screenHeight(58),
          elevation: 5,
          shadowRadius: screenWidth(54),
          shadowColor: "rgba(64, 72, 95, 0.14)",
        }}
        textProps={{
          style: {
            ...FONTS.body1,
            fontWeight: "500",
            color: addToCart ? COLORS.Light01 : COLORS.primary,
          },
        }}
      />

      <CartButton />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  priceNameContainer: {
    marginTop: screenHeight(20),
    marginBottom: screenHeight(24),
    flexDirection: "column",
  },
  imageContainer: {
    width: screenWidth(200),
    height: screenWidth(200),
    backgroundColor: COLORS.Light04,
    borderRadius: screenWidth(110),
    marginTop: screenHeight(32),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bulletsContainer: { marginTop: screenHeight(16), gap: screenHeight(12) },
  image: {
    resizeMode: "contain",
    width: screenWidth(200),
    height: screenWidth(200),
  },
  name: {
    color: COLORS.dark01,
    fontSize: screenWidth(32),
    fontWeight: "600",
    lineHeight: screenWidth(32),
  },
  price: {
    color: COLORS.dark03,
    fontSize: screenWidth(20),
    fontWeight: "300",
    lineHeight: screenWidth(20),
  },
  description: {
    color: COLORS.dark03,
    ...FONTS.body1,
    fontWeight: "300",
    lineHeight: screenWidth(24),
    marginBottom: screenHeight(16),
  },
});
