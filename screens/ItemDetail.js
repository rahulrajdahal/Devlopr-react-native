import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SmallButton } from "../components";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const ItemDetail = ({ route, onPress }) => {
  const [item, setItem] = useState(1);

  useEffect(() => {
    let { item } = route.params;
    setItem(item);
  }, [item]);

  function renderNavbar() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <Image source={icons.category} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={icons.notification} style={{ marginRight: 27.5 }} />
          <Image source={images.profile} />
        </View>
      </View>
    );
  }

  function renderImage() {
    return (
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
          source={item.image}
          style={{
            resizeMode: "contain",
            width: 200,
            height: 200,
          }}
        />
      </View>
    );
  }

  function renderNameAndPrice() {
    return (
      <View style={{ marginTop: 20, display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            color: COLORS.dark01,
            fontSize: 32,
            fontWeight: "600",
            lineHeight: 32,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: COLORS.dark03,
            fontSize: 20,
            fontWeight: "300",
            lineHeight: 20,
          }}
        >
          $ {item.price}
        </Text>
      </View>
    );
  }

  function renderDescription() {
    const { bullets } = item;

    return (
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
          {item.desc}
        </Text>

        <View style={{ marginTop: 16 }}>
          {/* {bullets.map((bullet) => (
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
          ))} */}
        </View>
      </View>
    );
  }

  function renderAddToCartButton() {
    return (
      <TouchableOpacity
        style={{
          marginTop: 58,
          marginBottom: 24,
          backgroundColor: COLORS.white,
          width: 179,
          height: 48,
          elevation: 5,
          shadowRadius: 55,
          shadowColor: "rgba(64, 72, 95, 0.14)",
          borderRadius: SIZES.borderRadius,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 37,
          paddingVertical: 14,
          alignSelf: "center",
        }}
        onPress={onPress}
      >
        <Image source={icons.plus} style={{ marginRight: 9.21 }} />
        <Text
          style={{ color: COLORS.primary, ...FONTS.body1, fontWeight: "500" }}
        >
          Add to Cart
        </Text>
      </TouchableOpacity>
    );
  }

  function renderCartButton() {
    return (
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.borderRadius * 2,
          position: "absolute",
          bottom: 90,
          right: 19,
          alignItems: "center",
          justifyContent: "center",
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
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
        marginTop: 40,
      }}
    >
      {/* Navbar */}
      {renderNavbar()}
      {/* Product Image  */}
      {renderImage()}
      {/* Product Name And Price */}
      {renderNameAndPrice()}
      {/* Product Description And Bullets */}
      {renderDescription()}

      {/* Add To Card Button */}
      {renderAddToCartButton()}

      {/* Cart Button*/}
      {renderCartButton()}
    </View>
  );
};

export default ItemDetail;
