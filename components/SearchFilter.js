import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SearchFilter({ data, input, setInput }) {
  return (
    <View style={{ paddingHorizontal: 30, marginTop: 30 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Search Results</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              </View>
            );
          }
          if (item.name.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              </View>
            );
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
