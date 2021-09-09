import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView, FlatList, Text } from "react-native";
import styles from "./styles";
import Item from "./Item";
import Actions from "../../states/actions";

export const Main = ({ navigation }) => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Actions.FEATURE_LIST });
  }, []);

  const openDetails = (item) => {

    const payload = {
      id: item.id,
    };

    dispatch({ type: Actions.FEATURE_DETAILS, payload: payload });
    navigation.navigate("Details");
  };

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => openDetails(item)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {todoList.error && !todoList.isLoading ? (
        <Text>{todoList.message}</Text>
      ) : (
        <></>
      )}
      {todoList.isLoading ? <Text>Carregando...</Text> : <></>}
      {todoList.data.length === 0 && !todoList.isLoading && !todoList.error ? (
        <Text>Vazio</Text>
      ) : (
        <FlatList data={todoList.data} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};

export default Main;
