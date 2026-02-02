import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppCheckBox, Button, Input } from "../../components";
import { COLORS, FONTS } from "../../constants";
import {
  FormCalendar,
  FormCard,
  FormLock,
  FormPerson,
} from "../../constants/icons";
import { screenHeight, screenWidth } from "../../constants/theme";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";

type AddPaymentScreenProps = NativeStackScreenProps<
  StoreStackParamList,
  "AddPayment"
>;

export default function AddPaymentScreen({
  navigation,
}: Readonly<AddPaymentScreenProps>) {
  const [isActive, setIsActive] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          label="Card Holder's Name"
          icon={<FormPerson />}
          inputProps={{
            placeholder: "John Doe",
            style: {
              width: "94%",
            },
          }}
        />
        <Input
          label="Card Number"
          icon={<FormCard />}
          inputProps={{
            placeholder: "xxxx xxxx xxxx xxxx",
            style: {
              width: "94%",
            },
          }}
        />
        <View style={styles.row}>
          <Input
            label="Expiry Date"
            icon={<FormCalendar />}
            style={{ width: "50%" }}
            inputProps={{
              placeholder: "mm/yy",
              style: {
                width: "80%",
              },
            }}
          />
          <Input
            label="CVC"
            icon={<FormLock />}
            style={{ width: "50%" }}
            inputProps={{
              placeholder: "xxx",
              style: {
                width: "80%",
              },
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setIsActive((isActive) => !isActive)}
        >
          <AppCheckBox
            isActive={!isActive}
            onPress={() => setIsActive((isActive) => !isActive)}
          />
          <Text style={styles.saveText}>Save Card Info for later</Text>
        </TouchableOpacity>
      </View>

      <Button
        text="Pay Now"
        onPress={() => navigation.navigate("Invoice")}
        style={styles.button}
      />

      <View style={styles.secureTextContainer}>
        <FormLock style={styles.secureIcon} />
        <Text style={styles.secureText}>Secured with SSL encryption</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: screenWidth(24),
    backgroundColor: COLORS.white,
  },
  formContainer: {
    marginTop: screenHeight(192),
    flexDirection: "column",
    gap: screenHeight(20),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(12),
  },
  saveText: {
    color: COLORS.dark02,
    ...FONTS.body2,
    fontWeight: "normal",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: screenWidth(12),
  },
  button: {
    marginBottom: screenHeight(16),
    marginTop: screenHeight(32),
    paddingVertical: screenHeight(12),
  },
  secureTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: screenWidth(4),
  },
  secureIcon: {
    color: COLORS.dark04,
    alignSelf: "center",
  },
  secureText: { color: COLORS.dark04, ...FONTS.body3, fontWeight: "500" },
});
