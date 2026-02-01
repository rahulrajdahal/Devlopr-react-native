import React from "react";
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { COLORS } from "../../constants";
import { screenWidth } from "../../constants/theme";

type CircleImageProps = ViewProps & {
  image: ImageSourcePropType;
  imageProps?: ImageProps;
};

export default function CircleImage({
  image,
  imageProps,
  ...props
}: CircleImageProps) {
  return (
    <View
      {...props}
      style={StyleSheet.flatten([styles.container, props.style])}
    >
      <Image
        {...imageProps}
        source={image}
        style={StyleSheet.flatten([styles.image, imageProps?.style])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth(60),
    height: screenWidth(60),
    backgroundColor: COLORS.Light03,
    borderRadius: screenWidth(110),
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: "contain",
  },
});
