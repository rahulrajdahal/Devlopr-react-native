import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const Article = ({ route, navigation }) => {
  const [article, setArticle] = useState(1);

  useEffect(() => {
    let { article } = route.params;
    setArticle(article);
  }, [article]);

  return (
    <View>
      <Text>Article</Text>
    </View>
  );
};

export default Article;
