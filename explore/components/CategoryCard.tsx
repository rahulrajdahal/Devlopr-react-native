import React from "react";
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

type Category = {
  logo: ImageSourcePropType;
  title: string;
  count: number;
};

type CategoryCardProps = { category: Category };
export default function CategoryCard({
  category,
}: Readonly<CategoryCardProps>) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: COLORS.Light04,
        width: 113,
        height: 152,
        borderRadius: SIZES.borderRadius,
        paddingHorizontal: 21,
        paddingVertical: 30,
        marginRight: 12,
      }}
    >
      <Image source={category.logo} />
      <View
        style={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: COLORS.dark02,
            ...FONTS.body2,
            fontWeight: "500",
          }}
        >
          {category.title}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            marginTop: 6,
            color: COLORS.dark03,
            ...FONTS.body3,
            fontWeight: "500",
          }}
        >{`${category.count}+topics`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
