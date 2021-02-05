import React from "react";
import { View, Image } from "react-native";
import { icons, COLORS, images, FONTS } from "../constants";
import { Notification } from "../constants/icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
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
          style={{ color: COLORS.dark04, marginRight: 27.5 }}
          onPress={() => navigation.navigate("Notifications")}
        />
        <Image source={images.profile} />
      </View>
    </View>
  );
};

export default Navbar;
