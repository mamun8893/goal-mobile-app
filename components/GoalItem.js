import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ itemData, handleDelete }) {
  return (
    <Pressable onPress={() => handleDelete(itemData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
