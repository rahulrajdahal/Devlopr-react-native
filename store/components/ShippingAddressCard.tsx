import React from "react";

import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS } from "../../constants";
import { Circle, Tick } from "../../constants/icons";
import { screenHeight, screenWidth } from "../../constants/theme";

export enum AddressType {
  Home = "home",
  Office = "office",
}

type ShippingAddressCardProps = PressableProps & {
  address: {
    type: AddressType;
    street: string;
    state: string;
    image: ImageSourcePropType;
  };
  isSelected?: boolean;
};

export default function ShippingAddressCard({
  address,
  isSelected = false,
  ...props
}: ShippingAddressCardProps) {
  return (
    <Pressable
      {...props}
      style={StyleSheet.flatten([styles.container, props.style])}
    >
      <Image
        source={address.image}
        style={styles.image}
        width={screenWidth(48)}
        height={screenWidth(48)}
      />
      <View style={styles.addressContainer}>
        <Text style={styles.type}>{address.type} Address</Text>
        <Text style={styles.street}>{address.street}</Text>
        <Text style={styles.state}>{address.state}</Text>
      </View>
      {isSelected ? (
        <View style={styles.iconContainer}>
          <Tick />
        </View>
      ) : (
        <Circle width={screenWidth(28)} height={screenWidth(28)} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: COLORS.Light04,
    borderRadius: screenWidth(10),
    width: "100%",
    paddingVertical: screenHeight(20),
  },
  image: { maxWidth: screenWidth(48), maxHeight: screenWidth(48) },
  type: {
    textTransform: "capitalize",
    color: COLORS.dark01,
    ...FONTS.h3,
    fontWeight: "500",
  },
  addressContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  street: {
    color: COLORS.dark03,
    ...FONTS.body2,
    fontWeight: "normal",
    textTransform: "capitalize",
  },
  state: {
    color: COLORS.dark03,
    ...FONTS.body2,
    fontWeight: "normal",
    textTransform: "capitalize",
  },
  iconContainer: {
    backgroundColor: COLORS.primary,
    width: screenWidth(28),
    height: screenWidth(28),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: screenWidth(50),
  },
});
