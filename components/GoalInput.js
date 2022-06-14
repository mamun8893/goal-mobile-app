import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function GoalInput({
  addGoalHandler,
  modalIsVisible,
  handleCloseModal,
}) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  const addGoal = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancle" onPress={handleCloseModal} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} color="#fff" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 120,
    backgroundColor: "#5e0acc",
    marginHorizontal: 8,
    borderRadius: 6,
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
