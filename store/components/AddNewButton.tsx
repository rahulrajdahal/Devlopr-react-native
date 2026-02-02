import React from "react";
import { StyleSheet } from "react-native";
import Button, { ButtonProps } from "../../components/ui/Buttons/Button";
import { COLORS, FONTS, screenWidth } from "../../constants/theme";

type AddNewButtonProps = ButtonProps;

export default function AddNewButton({ ...props }: AddNewButtonProps) {
  return (
    <Button
      {...props}
      style={styles.button}
      textProps={{
        style: styles.text,
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    borderStyle: "dashed",
    borderWidth: screenWidth(1),
    borderColor: COLORS.primary,
    backgroundColor: "rgba(70, 109, 232, 0.1)",
    borderRadius: screenWidth(20),
  },
  text: {
    color: COLORS.primary,
    textTransform: "uppercase",
    ...FONTS.body2,
  },
});
