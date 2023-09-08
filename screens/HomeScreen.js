import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import * as Icon from "react-native-feather";
import SearchFilter from "../components/SearchFilter";

export default function HomeScreen() {
  const words = [
    {
      id: 1,
      name: "Python",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "Html",
    },
    {
      id: 4,
      name: "CSS",
    },
    {
      id: 5,
      name: "React JS",
    },
    {
      id: 6,
      name: "React Native",
    },
    {
      id: 7,
      name: "Mongo DB",
    },
    {
      id: 8,
      name: "Node JS",
    },
  ];
  const [input, setInput] = useState("");
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "wheat",
          marginHorizontal: 30,
          borderRadius: 10,
        }}
      >
        <Icon.Search strokeWidth={1.2} color={"brown"} />
        <TextInput
          placeholder="Search"
          onChangeText={(e) => setInput(e)}
          style={{ width: "100%", marginLeft: 10, color: "brown" }}
        />
      </View>
      <SearchFilter data={words} input={input} setInput={setInput} />
    </View>
  );
}

const styles = StyleSheet.create({});
