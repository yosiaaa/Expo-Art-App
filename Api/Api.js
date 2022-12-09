import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Api = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  });
  return (
    <View>
      <Text>Api</Text>
    </View>
  );
};

export default Api;
