import { useState } from "react";
import { Pressable, Text, ToastAndroid, View } from "react-native";
import { ScreenContainer } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { EmptyNotifications, NotificationCard } from "../components";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      _id: 1,
      title: "New Challenge Awaits",
      desc: "For this month in Web Dev Challenge, we have partnered with our friends at Github, Gitlab, Icons8 and AWS. Learn More",
      time: "5m",
    },
    {
      _id: 2,
      title: "New Event",
      desc: "Join us this week in our virtual webinar for 'Careers in UX Design'",
      time: "9h",
    },
    {
      _id: 3,
      title: "Congratulations",
      desc: "Your article has been viewed 32.2k times and loved by 58 developers.",
      time: "11h",
    },
    {
      _id: 4,
      title: "Item Shipped",
      desc: "Your Item “Coder Mug” - has been shipped. You will receive it in 3 days (estimate)",
      time: "2d",
    },
  ]);

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
      </View>
    </ScreenContainer>
  );
};

export default Notifications;
