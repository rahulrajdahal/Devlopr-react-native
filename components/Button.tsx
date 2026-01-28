import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextProps,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

type ButtonProps = PressableProps & { textProps?: TextProps; text: string };

export default function Button({ text, textProps, ...props }: ButtonProps) {
  return (
    <Pressable
      {...props}
      style={StyleSheet.flatten([styles.container, props.style])}
    >
      <Text style={StyleSheet.flatten([styles.text, textProps?.style])}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.borderRadius,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: COLORS.white, ...FONTS.h2, fontWeight: "500" },
});
