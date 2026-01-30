import { useNavigation } from "@react-navigation/native";
import {
    NativeStackNavigationProp
} from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import { screenHeight, screenWidth } from "../../constants/theme";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";

export default function CartButton() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StoreStackParamList, "Store">>();

  return (
    <Pressable
      onPress={() => navigation.navigate("Cart")}
      style={{
        position: "absolute",
        bottom: screenHeight(34),
        right: screenWidth(20),
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
  );
}

const styles = StyleSheet.create({});
