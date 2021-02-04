import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { COLORS, FONTS } from "../constants";
import { StreetAddress } from "../constants/icons";

import { useForm } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

const Input = ({ icon, width, placeholder, label }) => {
  const { handleSubmit, register, errors, setValue } = useForm();
  const onSubmit = (values) => console.log(values);

  useEffect(() => {
    register({ placeholder });
  }, [register]);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: 40,
        width: "100%",
      }}
    >
      <Text style={{ color: COLORS.dark02, ...FONTS.body3, fontWeight: "500" }}>
        {label}
      </Text>
      <View
        style={{
          height: 48,
          width: width,
          // maxWidth: width,
          backgroundColor: COLORS.Light04,
          marginTop: 6,
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 21.67,
          paddingVertical: 17,
        }}
      >
        {icon}
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => {
            setValue(placeholder, text);
          }}
          style={{ width: "100%", marginLeft: 9.17 }}
        />
      </View>
    </View>
  );
};

export default Input;
