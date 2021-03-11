import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import Header from "./components/Header.jsx";
import Todolist from "./components/Todoitem.jsx";
import AddTodo from "./components/AddTodo.jsx";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Click me to delete !", key: "1" },
    { text: "Click me to delete !", key: "2" },
    { text: "Click me to delete !", key: "3" },
  ]);

  const pressHolder = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 1) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("SORRY", "Length of item must be more than 1 character", [
        { text: "OKAY" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss;
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <Text style={styles.title}>Click item when done</Text>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Todolist item={item} pressHandler={pressHolder}></Todolist>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    color: "aliceblue",
  },
});
