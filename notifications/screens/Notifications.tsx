import { useState } from "react";
import { Pressable, Text, ToastAndroid, View } from "react-native";
import { Navbar, ScreenContainer } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import defaultNotifications from "../../data/notifications";
import { EmptyNotifications, NotificationCard } from "../components";

const Notifications = () => {
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
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: SIZES.width * 0.1,
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

      {notifications.length ? (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            marginTop: 24,
          }}
        >
          {notifications.map((notification) => (
            <NotificationCard key={notification._id} {...notification} />
          ))}
        </View>
      ) : (
        <EmptyNotifications />
      )}
    </ScreenContainer>
  );
};

export default Notifications;
