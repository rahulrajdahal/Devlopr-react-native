import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-community/picker";
import { COLORS, FONTS, images } from "../constants";
import { ArrowLeft, FormFlag } from "../constants/icons";
import { useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

const AddShipping = ({ navigation }) => {
  const { handleSubmit, register, errors, setValue } = useForm();
  const onSubmit = (values) => console.log(values);

  const [selectedValue, setSelectedValue] = useState("Nepal");

  useEffect(() => {
    register("streetAddress");
  }, [register]);

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
              // display: "flex",
              // flexDirection: "row",
              // alignItems: "center",
              // justifyContent: "space-between",
            }}
          >
            {/* <FormFlag /> */}
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Picker.Item label="Nepal" value="nepal" />
              <Picker.Item label="China" value="china" />
              <Picker.Item label="India" value="india" />
              <Picker.Item label="UK" value="uk" />
            </Picker>
          </View>
        </View>

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
            Street Address
          </Text>
          <View
            style={{
              height: 48,
              width: 327,
              width: "100%",
              backgroundColor: COLORS.Light04,
              marginTop: 6,
              borderRadius: 10,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Street Address"
              onChangeText={(text) => {
                setValue("streetAddress", text);
              }}
            />
          </View>
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

      {/* Image */}
      {renderImage()}

      {/* Shipping Address Form */}
      {renderForm()}
    </View>
  );
};

export default AddShipping;
