import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScreenContainer } from "../../components";
import { COLORS } from "../../constants";
import { StoreStackParamList } from "../../navigations/StoreStackScreen";
import AddNewButton from "../components/AddNewButton";
import PaymentCard from "../components/PaymentCard";

type PaymentOptionsScreenProps = NativeStackScreenProps<
  StoreStackParamList,
  "PaymentOptions"
>;

export default function PaymentOptionsScreen({
  navigation,
}: Readonly<PaymentOptionsScreenProps>) {
  const paymentCards = [
    {
      leadingPin: "6514",
      trailingPin: "8754",
      expDate: "08/24",
      bgColor: COLORS.primary,
    },
    {
      leadingPin: "2146",
      trailingPin: "5478",
      expDate: "08/26",
      bgColor: COLORS.dark01,
    },
  ];

  return (
    <ScreenContainer>
      {paymentCards.map((paymentCard) => (
        <PaymentCard
          key={paymentCard.leadingPin}
          card={paymentCard}
          onPress={() => navigation.navigate("Invoice")}
          bgColor={paymentCard.bgColor}
        />
      ))}

      <AddNewButton
        text="Add New Payment Method"
        onPress={() => navigation.navigate("AddPayment")}
      />
    </ScreenContainer>
  );
}
