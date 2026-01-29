import { useState } from "react";
import { FlatList, Pressable, Text, ToastAndroid, View } from "react-native";
import { Navbar, ScreenContainer } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import defaultNotifications from "../../data/notifications";
import { EmptyNotifications, NotificationCard } from "../components";

type Notification = { _id: number; title: string; desc: string; time: string };

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState(defaultNotifications);

  const handleClearAll = () => {
    setNotifications([]);
    ToastAndroid.show("Notification Cleared", ToastAndroid.SHORT);
  };

  function renderPageTitleRow() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginTop: SIZES.height * 0.02,
          marginBottom: SIZES.height * 0.024,
        }}
      >
        <Text
          style={{
            color: COLORS.primary_text,
            ...FONTS.h1,
            fontWeight: "300",
            lineHeight: 28,
          }}
        >
          Notifications
        </Text>

        <Pressable onPress={handleClearAll}>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
              fontWeight: "500",
              lineHeight: 28,
            }}
          >
            Clear All
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScreenContainer>
      <Navbar isActive={true} />

      {/* Page Title And Settings */}
      {renderPageTitleRow()}

      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationCard {...item} />}
        keyExtractor={(notification) => notification._id.toString()}
        ListEmptyComponent={<EmptyNotifications />}
      />
    </ScreenContainer>
  );
}
