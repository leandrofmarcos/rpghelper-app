import React from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export const Main = () => {
  const todoDetails = useSelector((state) => state.todoDetails);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{JSON.stringify(todoDetails)}</Text>
    </View>
  );
};

export default Main;
