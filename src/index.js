import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Router from "./router";
import stateStore from "../src/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const Main = () => {
  const { store, persistor } = stateStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default Main;
