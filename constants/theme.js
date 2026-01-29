import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#466DE8",
  secondary: "#EAF0F5",

  // colors
  white: "#FFFFFF",
  dark01: "#264473",
  dark02: "#44638C",
  dark03: "#728EAE",
  dark04: "#A8BED1",
  Light05: "#EAF0F5",
  Light04: "#F0F5F9",
  Light03: "#F4F9FC",
  Light01: "#FCFDFE",
  primary_text: "#393C47",
};

export const SIZES = {
  // global sizes
  base: 13,
  font: 16,
  paddingHorizontal: 24,
  paddingVertical: 13,
  borderRadius: 15,

  //   font sizes
  largeTitle: 48,
  h1: 24,
  h2: 18,
  h3: 16,

  body1: 16,
  body2: 14,
  body3: 12,
  body4: 10,

  //   app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h1,
  },
  h2: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h2,
  },
  h3: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.h3,
  },
  body1: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body1,
  },
  body2: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body2,
  },
  body3: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body3,
  },
  body4: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: SIZES.body4,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
