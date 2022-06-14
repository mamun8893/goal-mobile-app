import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ itemData, handleDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => handleDelete(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressed: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
