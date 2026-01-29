import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { COLORS, icons, images } from "../constants";
import { Notification } from "../constants/icons";

type NavbarProps = { isActive?: boolean };

const Navbar = ({ isActive = false }: NavbarProps) => {
  const navigation = useNavigation();

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
