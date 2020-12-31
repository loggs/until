import React from "react";
import { ListItem, Avatar, Card, Divider } from "react-native-elements";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export default function CardList({ name, created, end }) {
  return (
    <ListItem
      key={name}
      Component={TouchableHighlight}
      disabledStyle={{ opacity: 0.5 }}>
      <Avatar
        containerStyle={styles.avatarCard}
        rounded
        activeOpacity={0.8}
        size="medium"
        title="P"
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text>{name}</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text>{(end || new Date()).toLocaleDateString()}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  avatarCard: {
    backgroundColor: "#A9A9A9",
  },
  titleStyle: {
    fontSize: 100,
  },
});
