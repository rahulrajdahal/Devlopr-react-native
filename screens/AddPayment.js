import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AppCheckBox, Input } from "../components";
import { COLORS, FONTS } from "../constants";
import {
  ArrowLeft,
  FormPerson,
  FormCard,
  FormCalendar,
  FormLock,
} from "../constants/icons";
import CheckBox from "@react-native-community/checkbox";

const AddPayment = ({ navigation }) => {
  function renderHeader() {
    return (
      <View
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            style={{
              marginRight: 103,
              color: COLORS.dark02,
              alignSelf: "flex-start",
            }}
            width="16"
            height="15.56"
          />
        </TouchableOpacity>
        <Text
          style={{
            color: COLORS.dark01,
            ...FONTS.h1,
            fontWeight: "500",
            alignSelf: "center",
          }}
        >
          Payment Method
        </Text>
      </View>
    );
  }

  function renderForm() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
      <View style={{ marginTop: 191 }}>
        <Input
          label="Card Holder's Name"
          icon={<FormPerson />}
          placeholder="John Doe"
          width="100%"
        />
        <Input
          label="Card Number"
          icon={<FormCard />}
          placeholder="xxxx xxxx xxxx xxxx"
          width="100%"
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: "50%",
          }}
        >
          <Input
            label="Expiry Date"
            icon={<FormCalendar />}
            placeholder="mm/yy"
            width="100%"
          />
          <View style={{ width: 4 }} />
          <Input
            label="CVC"
            icon={<FormLock />}
            placeholder="xxx"
            width="100%"
          />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppCheckBox />
          <Text
            style={{
              color: COLORS.dark02,
              ...FONTS.body2,
              fontWeight: "normal",
              marginLeft: 12,
            }}
          >
            Save Card Info for later
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 20,
        backgroundColor: COLORS.white,
        width: "100%",
        height: "100%",
      }}
    >
      {/*  Back Button And Page Title */}
      {renderHeader()}
      {/* Form  */}
      {renderForm()}
    </View>
  );
};

export default AddPayment;
