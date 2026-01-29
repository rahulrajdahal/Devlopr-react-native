import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";

type ScreenContainerProps = ViewProps;

const ScreenContainer = ({ ...props }: ScreenContainerProps) => {
  const { top, left } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: Math.max(top, 20),
      paddingHorizontal: SIZES.width * 0.048,
      flex: 1,
      backgroundColor: COLORS.white,
    },
  });

  return (
    <View
      {...props}
      style={StyleSheet.flatten([styles.container, props.style])}
    >
      {props?.children}
    </View>
  );
};

export default ScreenContainer;
