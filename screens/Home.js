import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SmallButton, TopCard } from "../components";
import { icons, FONTS, COLORS, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  function renderNavbar() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 40,
        }}
      >
        <Image source={icons.category} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={icons.notification} style={{ marginRight: 27.5 }} />
          <Image source={images.profile} />
        </View>
      </View>
    );
  }

  function renderChallengeBoard() {
    return (
      <View
        style={{
          marginTop: 34.67,
          width: 327,
          width: "100%",
          height: 210,
          backgroundColor: COLORS.Light05,
          borderRadius: SIZES.borderRadius,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginTop: 24,
            marginLeft: 24,
            width: 161,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: COLORS.primary_text,
              ...FONTS.h2,
              lineHeight: 22,
              fontWeight: "500",
            }}
          >
            BootStrap 5 Website Design Challenge
          </Text>
          <Text
            style={{
              marginTop: 7,
              color: COLORS.primary_text,
              ...FONTS.body3,
              lineHeight: 16,
              fontWeight: "400",
              marginBottom: 20,
            }}
          >
            Win Exciting Prizes from our sponsers at Github, Gitlab, Icons8 and
            AWS.
          </Text>
          <SmallButton
            text="Join Challenge"
            textColor={COLORS.white}
            bgcolor={COLORS.primary}
            onPress={() => console.log("Join Challenge")}
          />
        </View>
        <View style={{ position: "relative", bottom: 0, top: 10 }}>
          <Image
            source={images.home}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </View>
      </View>
    );
  }

  function renderTopTitle() {
    return (
      <Text
        style={{
          marginTop: 32,
          color: COLORS.dark02,
          ...FONTS.h3,
          fontWeight: "500",
        }}
      >
        Top This Week
      </Text>
    );
  }

  function renderTopPosts() {
    const posts = [
      {
        _id: 1,
        category: "Web Dev",
        likes: 32,
        title: "What's new in VueJS 3?",
        poster: "Pablo Gurrero",
        date: "24 Oct 2020",
        avatar: images.poster_profile,
        jumbotron: images.vuejs,
        content:
          "Vue 3 isn’t officially released yet, but the Vue team has released the Alpha version for us developers to use some of the features that will be shipped with Vue 3. At the time of writing this article, we have the (Alpha-10) version available to experiment with.Though this isn’t ready to be used in production yet, it’s always good to learn new features in advance so that when the stable version is released, we can directly start using it or migrate",
      },
      {
        _id: 2,
        category: "Design",
        likes: 18,
        title: "Challenges in UX Carrer",
        poster: "Katy Willizms",
        date: "23 Oct 2020",
        avatar: images.post_two,
        jumbotron: images.vuejs,
        content:
          "Vue 3 isn’t officially released yet, but the Vue team has released the Alpha version for us developers to use some of the features that will be shipped with Vue 3.At the time of writing this article, we have the (Alpha-10) version available to experiment with.Though this isn’t ready to be used in production yet, it’s always good to learn new features in advance so that when the stable version is released, we can directly start using it or migrate",
      },
      {
        _id: 3,
        category: "Insights",
        likes: 45,
        title: "The Google Homepage Story",
        poster: "Tanya Singh",
        date: "23 Oct 2020",
        avatar: images.post_three,
        jumbotron: images.vuejs,
        content:
          "Vue 3 isn’t officially released yet, but the Vue team has released the Alpha version for us developers to use some of the features that will be shipped with Vue 3.At the time of writing this article, we have the (Alpha-10) version available to experiment with.Though this isn’t ready to be used in production yet, it’s always good to learn new features in advance so that when the stable version is released, we can directly start using it or migrate",
      },
      {
        _id: 4,
        category: "Javascript",
        likes: 52,
        title: "Drag and Drop in React",
        poster: "Sike Dahl",
        date: "22 Oct 2020",
        avatar: images.post_four,
        jumbotron: images.vuejs,
        content:
          "Vue 3 isn’t officially released yet, but the Vue team has released the Alpha version for us developers to use some of the features that will be shipped with Vue 3.At the time of writing this article, we have the (Alpha-10) version available to experiment with.Though this isn’t ready to be used in production yet, it’s always good to learn new features in advance so that when the stable version is released, we can directly start using it or migrate",
      },
    ];

    return (
      <View
        style={{
          alignSelf: "center",
          maxWidth: 328,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        {posts.map((post) => (
          <TopCard
            key={post._id}
            category={post.category}
            title={post.title}
            poster={post.poster}
            date={post.date}
            avatar={post.avatar}
            likesCount={post.likes}
            onPress={() => navigation.navigate("Article", { article: post })}
          />
        ))}
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
      {/* Navbar */}
      {renderNavbar()}

      {/* Challenge board */}
      {renderChallengeBoard()}

      {/* Top Title */}
      {renderTopTitle()}

      {/* Top Posts */}
      {renderTopPosts()}
    </ScrollView>
  );
};

export default Home;
