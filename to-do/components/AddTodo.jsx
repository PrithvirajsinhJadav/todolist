import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholderTextColor="aliceblue"
        style={styles.input}
        placeholder="Add Todo...."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add item"
        color="#06bd7d"
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 2,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    color: "aliceblue",
    borderBottomColor: "aliceblue",
  },
});
