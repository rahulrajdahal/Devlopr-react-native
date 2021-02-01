import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images } from "../constants";

const ItemDetail = ({ route }) => {
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

        {bullets.map((bullet) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={icons.bullets} />
            <Text>{bullet.desc}</Text>
          </View>
        ))}
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
    </View>
  );
};

export default ItemDetail;
