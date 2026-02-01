import React from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextProps,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { screenHeight, screenWidth } from "../../../constants/theme";

type ButtonProps = PressableProps & {
  icon?: ImageSourcePropType;
  textProps?: TextProps;
  text: string;
  suffixIcon?: ImageSourcePropType;
  iconProps?: ImageProps;
};

export default function Button({
  text,
  icon,
  textProps,
  suffixIcon,
  iconProps,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      {...props}
      style={StyleSheet.flatten([
        styles.base,
        icon || suffixIcon ? styles.iconContainer : styles.container,
        props.style,
      ])}
    >
      {icon ? <Image {...iconProps} source={icon} /> : null}
      <Text style={StyleSheet.flatten([styles.text, textProps?.style])}>
        {text}
      </Text>
      {suffixIcon ? <Image {...iconProps} source={suffixIcon} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.borderRadius,
    paddingHorizontal: screenWidth(24),
    paddingVertical: screenHeight(16),
  },
  container: {
    backgroundColor: COLORS.primary,
  },
  iconContainer: {
    flexDirection: "row",
    gap: screenWidth(4),
  },
  text: { color: COLORS.white, ...FONTS.h2, fontWeight: "500" },
});
