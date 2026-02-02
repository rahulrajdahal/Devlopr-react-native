import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { COLORS, images } from "../../constants";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Input } from "../../components";
import {
  City,
  FormFlag,
  State,
  StreetAddress,
  ZipCode,
} from "../../constants/icons";
import { screenHeight, screenWidth } from "../../constants/theme";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";

type AddShippingScreenProps = NativeStackScreenProps<
  StoreStackParamList,
  "AddShipping"
>;
export default function AddShippingScreen({
  navigation,
}: Readonly<AddShippingScreenProps>) {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={images.home_address}
        width={screenHeight(60)}
        height={screenHeight(60)}
      />

      <View style={styles.inputContainer}>
        <Input
          icon={<FormFlag />}
          label="Country"
          inputProps={{
            placeholder: "Country",
            style: { width: "94%" },
          }}
        />
        <Input
          icon={<StreetAddress />}
          label="Street Address"
          inputProps={{
            style: { width: "94%" },
            placeholder: "My Street",
          }}
        />

        <Input
          icon={<ZipCode />}
          label="ZIP Code"
          inputProps={{
            placeholder: "Ex.44200",
          }}
        />

        <View style={styles.cityAndStateContainer}>
          <Input
            icon={<City />}
            label="City"
            style={styles.cityAndState}
            inputProps={{
              style: { width: "74%" },
              placeholder: "Ex.44200",
            }}
          />
          <Input
            icon={<State />}
            label="State"
            style={styles.cityAndState}
            inputProps={{
              style: { width: "74%" },
              placeholder: "Ex.44200",
            }}
          />
        </View>
      </View>

      <Button
        text="Save Shipping Address"
        onPress={() => navigation.navigate("Checkout")}
        style={styles.button}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: screenWidth(24),
    backgroundColor: COLORS.white,
  },
  image: {
    marginTop: screenHeight(64),
    alignSelf: "center",
  },
  inputContainer: {
    marginTop: 40,
    flexDirection: "column",
    gap: screenHeight(20),
  },
  cityAndStateContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: screenWidth(8),
  },
  cityAndState: { width: "50%" },
  button: { marginVertical: screenHeight(48) },
});
