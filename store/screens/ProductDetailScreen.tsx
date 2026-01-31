import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { Image, Pressable, PressableProps, Text, View } from "react-native";
import { Navbar, NotFound, ScreenContainer } from "../../components";
import { COLORS, icons } from "../../constants";
import { FONTS, screenWidth, SIZES } from "../../constants/theme";
import products from "../../data/products";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";

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

      <Pressable
        style={{
          marginTop: 58,
          marginBottom: 24,
          backgroundColor: addToCart ? COLORS.primary : COLORS.white,
          width: 179,
          height: 48,
          elevation: 5,
          shadowRadius: 55,
          shadowColor: "rgba(64, 72, 95, 0.14)",
          borderRadius: SIZES.borderRadius,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 37,
          paddingVertical: 14,
          alignSelf: "center",
        }}
        onPress={() => setAddToCart((addToCart) => !addToCart)}
      >
        <Image
          source={addToCart ? icons.check_active : icons.plus}
          style={{ marginRight: 9.21 }}
        />
        {addToCart ? (
          <Text
            style={{ color: COLORS.Light01, ...FONTS.body1, fontWeight: "500" }}
          >
            Added to Cart
          </Text>
        ) : (
          <Text
            style={{ color: COLORS.primary, ...FONTS.body1, fontWeight: "500" }}
          >
            Add to Cart
          </Text>
        )}
      </Pressable>

      <View style={{ position: "absolute", bottom: 18, right: 19 }}>
        <Pressable
          onPress={() => navigation.navigate("Cart")}
          style={{
            width: 60,
            height: 60,
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.borderRadius * 2,
            alignSelf: "flex-end",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "rgba(70, 109, 232, 0.8)",
            shadowRadius: 50,
            elevation: 15,
          }}
        >
          <View
            style={{
              width: 21,
              height: 21,
              backgroundColor: COLORS.white,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.borderRadius * 2,
              elevation: 5,
              shadowRadius: 15,
              shadowColor: "rgba(0, 0, 0, 0.15)",
              position: "absolute",
              bottom: 39,
              right: 41,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 8,
                color: COLORS.dark02,
                lineHeight: 8,
              }}
            >
              03
            </Text>
          </View>
          <Image
            source={icons.cart}
            style={{ resizeMode: "contain", width: 17.27, height: 17.5 }}
          />
        </Pressable>
      </View>
    </ScreenContainer>
  );
}
