import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Card, Divider } from "react-native-elements";
import CardList from "./card-list/CardList";

const initDate = (name, created, end) => ({
  name,
  created,
  end,
});

const testData = [
  initDate(
    "Larissa's Freedom",
    new Date(new Date().toDateString()),
    new Date("01/01/2021"),
  ),
  initDate(
    "Mortgage Under $50k",
    new Date(new Date().toDateString()),
    new Date("02/01/2021"),
  ),
  initDate(
    "Mortgage Paid Off",
    new Date(new Date().toDateString()),
    new Date("04/01/2021"),
  ),
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Until",
          style: { color: "#fff", fontSize: 20, fontFamily: "Avenir-Black" },
        }}
        rightComponent={{ icon: "edit", type: "feather", color: "#fff" }}
      />
      {testData.map((row, i) => (
        <CardList {...row} key={i} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroller: {
    flex: 1,
  },
});
