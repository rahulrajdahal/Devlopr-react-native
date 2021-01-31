import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StoreCard } from "../components";
import { COLORS, FONTS, images, icons, SIZES } from "../constants";

const Store = () => {
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

  function renderPageTitleRow() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 28,
        }}
      >
        <Text
          style={{
            color: COLORS.primary_text,
            ...FONTS.h1,
            fontWeight: "300",
            lineHeight: 28,
          }}
        >
          Marketplace
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.dark04,
              ...FONTS.body3,
              fontWeight: "500",
            }}
          >
            Showing
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 6,
            }}
          >
            <Text
              style={{
                color: COLORS.primary,
                ...FONTS.body3,
                fontWeight: "500",
              }}
            >
              All
            </Text>
            <Image
              source={icons.arrow_down}
              style={{ width: 6, height: 6, tintColor: COLORS.primary }}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderHeader() {
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
            Get upto 90% off on selected items this Black Friday Season with
            free deliveries.
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

  function renderItems() {
    const products = [
      { _id: 1, name: "Astra Chair", image: images.gaming_chair, price: 79.99 },
      { _id: 2, name: "Github Shirt", image: images.github_shirt, price: 9.99 },
      { _id: 3, name: "Coffee Mug", image: images.coffee_mug, price: 2.99 },
      {
        _id: 4,
        name: "Octocat Figurine",
        image: images.ocotocat_figurine,
        price: 6.45,
      },
      { _id: 5, name: "Astra Chair", image: images.gaming_chair, price: 79.99 },
      { _id: 6, name: "Github Shirt", image: images.github_shirt, price: 9.99 },
      { _id: 7, name: "Coffee Mug", image: images.coffee_mug, price: 2.99 },
      {
        _id: 8,
        name: "Octocat Figurine",
        image: images.ocotocat_figurine,
        price: 6.45,
      },
    ];

    const numColumns = 2;

    const renderItem = ({ item }) => {
      return (
        <StoreCard
          key={item._id}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      );
    };

    return (
      <View
        style={{
          minWidth: 327,
          width: "100%",
          minHeight: 327,
          height: "100%",
          flex: 1,
        }}
      >
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => `${item._id}`}
          numColumns={numColumns}
        />
      </View>
    );
  }

  // function renderCartButton() {
  //   return (
  //     <View
  //       style={{
  //         width: 60,
  //         height: 60,
  //         backgroundColor: COLORS.primary,
  //         borderRadius: SIZES.borderRadius * 2,
  //         position: "absolute",
  //         bottom: 90,
  //         right: 19,
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         shadowColor: "rgba(70, 109, 232, 0.8)",
  //         shadowRadius: 50,
  //         elevation: 15,
  //       }}
  //     >
  //       <Image
  //         source={icons.cart}
  //         style={{ resizeMode: "contain", width: 17.27, height: 17.5 }}
  //       />
  //     </View>
  //   );
  // }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      {/* Navbar */}
      {renderNavbar()}

      {/* Page Title And Settings */}
      {renderPageTitleRow()}

      {/* Header */}
      {renderHeader()}

      <View style={{ marginTop: 32 }}>
        {/* Shop Items */}
        {renderItems()}
      </View>

      {/* Cart Button*/}
      {/* {renderCartButton()} */}
    </View>
  );
};

export default Store;
