import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-community/picker";
import { COLORS, FONTS, images } from "../constants";
import {
  ArrowLeft,
  FormFlag,
  StreetAddress,
  State,
  City,
  ZipCode,
} from "../constants/icons";

import { Input, LargeButton } from "../components";
import { ScrollView } from "react-native-gesture-handler";

const AddShipping = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Nepal");

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
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Add Shipping
        </Text>
      </View>
    );
  }

  function renderImage() {
    return (
      <View
        style={{ marginTop: 64, alignSelf: "center", justifyContent: "center" }}
      >
        <Image source={images.home_address} width="60" height="60" />
      </View>
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: 40 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 40,
          }}
        >
          <Text
            style={{ color: COLORS.dark02, ...FONTS.body3, fontWeight: "500" }}
          >
            Country
          </Text>
          <View
            style={{
              height: 48,
              width: 327,
              width: "100%",
              backgroundColor: COLORS.Light04,
              marginTop: 6,
              borderRadius: 10,
              paddingHorizontal: 21.67,
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",

              //   alignItems: "center",
              //   justifyContent: "space-between",
            }}
          >
            <FormFlag
              style={{
                alignSelf: "flex-start",
                position: "absolute",
                marginLeft: 21.75,
              }}
            />
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={{
                marginLeft: 21.75,
              }}
            >
              <Picker.Item label="Nepal" value="nepal" />
              <Picker.Item label="China" value="china" />
              <Picker.Item label="India" value="india" />
              <Picker.Item label="UK" value="uk" />
            </Picker>
          </View>
        </View>

        <Input
          width="100%"
          icon={<StreetAddress />}
          label="Street Address"
          placeholder="streetAddress"
        />

        <Input
          width="50%"
          icon={<ZipCode />}
          label="ZIP Code"
          placeholder="Ex.44200"
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            alignSelf: "flex-start",
            maxWidth: "49%",
          }}
        >
          <Input
            width="100%"
            icon={<City />}
            label="City"
            placeholder="Ex.44200"
          />
          <View style={{ width: 8 }} />
          <Input
            width="100%"
            icon={<State />}
            label="State "
            placeholder="Ex.44200"
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView
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

      {/* Image */}
      {renderImage()}

      {/* Shipping Address Form */}
      {renderForm()}

      <LargeButton
        text="Save Shipping Address"
        style={{ alignSelf: "center", marginBottom: 48 }}
        onPress={() => console.log("Save Shipping Address")}
      />
    </ScrollView>
  );
};

export default AddShipping;
