import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { Navbar } from "../../components";
import { COLORS, FONTS, icons } from "../../constants";
import products from "../../data/products";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import Banner from "../components/Banner";
import CartButton from "../components/CartButton";
import ItemCard from "../components/ItemCard";

type StoreScreenProps = NativeStackScreenProps<StoreStackParamList, "Store">;

export default function StoreScreen({
  navigation,
}: Readonly<StoreScreenProps>) {
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

  return (
    <ScrollView
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      <Navbar />

      {/* Page Title And Settings */}
      {renderPageTitleRow()}

      <Banner />

      <View style={{ marginTop: 32 }}>
        <FlatList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <ItemCard
              {...item}
              onPress={() =>
                navigation.navigate("ItemDetail", { itemId: item._id })
              }
            />
          )}
          scrollEnabled={false}
        />
      </View>

      <CartButton />
    </ScrollView>
  );
}
