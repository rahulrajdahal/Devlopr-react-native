import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { COLORS, icons, images } from "../constants";
import { Notification } from "../constants/icons";
import { HomeStackParamList } from "../navigations/HomeStackScreen";

type NavbarProps = {
  isActive?: boolean;
};

type NavbarNavigationProps = NativeStackNavigationProp<
  HomeStackParamList,
  "Home"
>;

const Navbar = ({ isActive = false }: NavbarProps) => {
  const navigation = useNavigation<NavbarNavigationProps>();

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
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Image source={icons.category} />
      </Pressable>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Notification
          style={{
            color: isActive ? COLORS.dark02 : COLORS.dark04,
            marginRight: 27.5,
          }}
          onPress={() => navigation.navigate("Notifications")}
        />
        <Image source={images.profile} />
      </View>
    </View>
  );
};

export default Navbar;
