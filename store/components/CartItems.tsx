import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { images } from "../../constants";
import { screenHeight } from "../../constants/theme";
import CartItem from "./CartItem";

export default function CartItems() {
  const products = [
    {
      _id: 1,
      image: images.gaming_chair,
      name: "Astra Chair",
      price: 79.99,
      quantity: 1,
    },
    {
      _id: 2,
      image: images.github_shirt,
      name: "Github Shirt",
      price: 9.99,
      quantity: 1,
    },
    {
      _id: 3,
      image: images.coffee_mug,
      name: "Coffe Mug",
      price: 4.99,
      quantity: 1,
    },
    {
      _id: 4,
      image: images.ocotocat_figurine,
      name: "Octocat Figurines",
      price: 14.99,
      quantity: 1,
    },
  ];

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => `${item._id}`}
      renderItem={({ item }) => <CartItem product={item} />}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
    />
  );
}

const styles = StyleSheet.create({
  itemSeparator: { marginBottom: screenHeight(24) },
});
