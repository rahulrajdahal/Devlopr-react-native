import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { Button } from "../../components";
import { COLORS, SIZES } from "../../constants";

type ActionButtonsProps = ViewProps & {
  primaryButtonProps: {
    text?: string;
    navigationScreen: keyof ReactNavigation.RootParamList;
  };
};

export default function ActionButtons({
  primaryButtonProps: { text = "Next", navigationScreen },
  ...props
}: Readonly<ActionButtonsProps>) {
  const navigation = useNavigation();

  return (
    <View
      {...props}
      style={StyleSheet.flatten([
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: SIZES.width * 0.025,
          marginBottom: 60,
        },
        props.style,
      ])}
    >
      <Button
        text="Go Back"
        style={{
          width: SIZES.width * 0.44,
          height: 58,
          backgroundColor: "rgba(70, 109, 232, 0.1)",
        }}
        textProps={{
          style: { color: COLORS.primary },
        }}
        onPress={() => navigation.goBack()}
      />

      <Button
        text={text}
        style={{
          width: SIZES.width * 0.44,
          height: 58,
          backgroundColor: COLORS.primary,
        }}
        textProps={{
          style: { color: COLORS.white },
        }}
        onPress={() => navigation.navigate(navigationScreen)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
