import React from "react";
import { View, Text, Image } from "react-native";
import { Navbar, NotificationCard } from "../components";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import { NoNotification } from "../constants/images";

const Notifications = ({ navigation }) => {
  function renderPageTitleRow() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 28,
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
      </View>
    );
  }

  function renderNotificationCards() {
    const notifications = [
      //   {
      //     _id: 1,
      //     title: "New Challenge Awaits",
      //     desc:
      //       "For this month in Web Dev Challenge, we have partnered with our friends at Github, Gitlab, Icons8 and AWS. Learn More",
      //     time: "5m",
      //   },
      //   {
      //     _id: 2,
      //     title: "New Event",
      //     desc:
      //       "Join us this week in our virtual webinar for 'Careers in UX Design'",
      //     time: "9h",
      //   },
      //   {
      //     _id: 3,
      //     title: "Congratulations",
      //     desc:
      //       "Your article has been viewed 32.2k times and loved by 58 developers.",
      //     time: "11h",
      //   },
      //   {
      //     _id: 4,
      //     title: "Item Shipped",
      //     desc:
      //       "Your Item “Coder Mug” - has been shipped. You will receive it in 3 days (estimate)",
      //     time: "2d",
      //   },
    ];

    return (
      <>
        {notifications.length !== 0 ? (
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
              <NotificationCard
                key={notification._id}
                notification={notification}
              />
            ))}
          </View>
        ) : (
          <View style={{ display: "flex", alignItems: "center" }}>
            <NoNotification
              style={{
                width: "100%",
                alignSelf: "center",
                marginHorizontal: 39,
                marginTop: 101,
              }}
            />
            <Text
              style={{
                color: COLORS.dark01,
                ...FONTS.h2,
                fontWeight: "500",
                textTransform: "capitalize",
                marginTop: 40,
              }}
            >
              No New Notification
            </Text>
            <Text
              style={{
                width: 280,
                color: COLORS.dark03,
                ...FONTS.body2,
                fontWeight: "300",
                lineHeight: 20,
                textAlign: "center",
                marginTop: 6,
              }}
            >
              There aren’t any new notifications for you at the moment. They
              will appear here once you do.
            </Text>
          </View>
        )}
      </>
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
      <Navbar isActive />

      {/* Page Title And Settings */}
      {renderPageTitleRow()}

      {/* Notification Cards */}
      {renderNotificationCards()}
    </View>
  );
};

export default Notifications;
