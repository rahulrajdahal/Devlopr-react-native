import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { COLORS, icons, images } from "../constants";

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
    </View>
  );
};

export default ItemDetail;
