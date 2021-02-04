import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AppCheckBox, Input, LargeButton } from "../components";
import { COLORS, FONTS } from "../constants";
import {
  ArrowLeft,
  FormPerson,
  FormCard,
  FormCalendar,
  FormLock,
} from "../constants/icons";

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
    const [isActive, setIsActive] = useState(false);

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

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          isActive={!isActive}
          onPress={() => setIsActive((isActive) => !isActive)}
        >
          <AppCheckBox
            isActive={!isActive}
            onPress={() => setIsActive((isActive) => !isActive)}
          />
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
        </TouchableOpacity>
      </View>
    );
  }

  function renderSecureText() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FormLock
          style={{
            color: COLORS.dark04,
            marginRight: 5.5,
            alignSelf: "center",
          }}
        />
        <Text
          style={{ color: COLORS.dark04, ...FONTS.body3, fontWeight: "500" }}
        >
          Secured with SSL encryption
        </Text>
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

      <LargeButton
        text="Pay Now"
        style={{ marginBottom: 17, marginTop: 32, width: "100%" }}
      />

      {/* Secure Text */}
      {renderSecureText()}
    </View>
  );
};

export default AddPayment;
