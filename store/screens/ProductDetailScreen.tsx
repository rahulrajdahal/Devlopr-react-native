import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { Image, PressableProps, Text, View } from "react-native";
import { Button, Navbar, NotFound, ScreenContainer } from "../../components";
import { COLORS, icons } from "../../constants";
import { FONTS, screenHeight, screenWidth } from "../../constants/theme";
import products from "../../data/products";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import CartButton from "../components/CartButton";

type ProductDetailProps = NativeStackScreenProps<
  StoreStackParamList,
  "ProductDetail"
> &
  PressableProps;

export default function ProductDetailScreen({
  route,
  navigation,
}: ProductDetailProps) {
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

      <View
        style={{
          width: 220,
          height: 220,
          backgroundColor: COLORS.Light04,
          borderRadius: 110,
          marginTop: 32,
          marginHorizontal: 77,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={product.image}
          style={{
            resizeMode: "contain",
            width: screenWidth(200),
            height: screenWidth(200),
          }}
        />
      </View>

      <View style={{ marginTop: 20, display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            color: COLORS.dark01,
            fontSize: 32,
            fontWeight: "600",
            lineHeight: 32,
          }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            color: COLORS.dark03,
            fontSize: 20,
            fontWeight: "300",
            lineHeight: 20,
          }}
        >
          $ {product.price}
        </Text>
      </View>

      <View style={{ marginTop: 24 }}>
        <Text
          style={{
            color: COLORS.dark03,
            ...FONTS.body1,
            fontWeight: "300",
            lineHeight: 24,
            marginBottom: 16,
          }}
        >
          {product.desc}
        </Text>

        <View style={{ marginTop: 16 }}>
          {product.bullets.map((bullet) => (
            <View
              key={bullet._id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Image source={icons.bullet} style={{ marginRight: 13.33 }} />
              <Text
                style={{
                  color: COLORS.dark03,
                  ...FONTS.body1,
                  fontWeight: "normal",
                }}
              >
                {bullet.desc}
              </Text>
            </View>
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
