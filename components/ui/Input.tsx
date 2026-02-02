import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TextInputProps,
  View,
  ViewProps,
} from "react-native";
import { COLORS, FONTS } from "../../constants";

import { TextInput } from "react-native-gesture-handler";
import { screenHeight, screenWidth } from "../../constants/theme";

type InputProps = ViewProps & {
  icon: ReactNode;
  label: string;
  inputProps?: TextInputProps;
};

export default function Input({
  icon,
  label,
  inputProps,
  ...props
}: InputProps) {
  return (
    <View
      {...props}
      style={StyleSheet.flatten([styles.container, props.style])}
    >
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon}
        <TextInput {...inputProps} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: screenHeight(6),
  },
  label: { color: COLORS.dark02, ...FONTS.body3, fontWeight: "500" },
  inputContainer: {
    backgroundColor: COLORS.Light04,
    borderRadius: screenWidth(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: screenWidth(20),
    paddingVertical: screenHeight(4),
    gap: screenWidth(10),
  },
});
