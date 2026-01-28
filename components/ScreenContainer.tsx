import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenContainerProps = ViewProps;

const ScreenContainer = ({ ...props }: ScreenContainerProps) => {
  const { top } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: { paddingVertical: Math.max(top, 20) },
  });
  const mergedStyles = StyleSheet.flatten([styles.container, props.style]);

  return (
    <View {...props} style={mergedStyles}>
      {props?.children}
    </View>
  );
};

export default ScreenContainer;
