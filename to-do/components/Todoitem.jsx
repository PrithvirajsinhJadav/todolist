import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Todolist({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    textAlign: "center",
    borderColor: "aliceblue",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    color: "aliceblue",
  },
});
