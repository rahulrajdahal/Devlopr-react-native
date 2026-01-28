import React, { ReactNode } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS } from "../constants";

type SelectCardProps = PressableProps & {
  img: ImageSourcePropType;
  isActive: boolean;
  children: ReactNode;
};

const SelectCard = ({ isActive, children, img, ...props }: SelectCardProps) => {
  return (
    <Pressable {...props}>
      <View
        style={{
          width: 156,
          height: 186,
          backgroundColor: isActive
            ? COLORS.primary
            : "rgba(68, 99, 140, 0.05);",
          opacity: isActive ? 1 : 0.5,
          borderRadius: 20,
          borderStyle: isActive ? "solid" : "dashed",
          borderWidth: isActive ? 0 : 1,
          borderColor: isActive ? "white" : COLORS.dark03,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={img} width={60} height={60} />
        <Text
          style={{
            marginTop: 12,
            color: isActive ? COLORS.white : COLORS.dark02,
            ...FONTS.body1,
            opacity: 1,
            fontWeight: "500",
          }}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default SelectCard;
