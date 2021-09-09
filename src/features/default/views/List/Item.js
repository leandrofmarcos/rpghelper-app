import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export const Main = ({ item, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default Main;
