import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    handleCloseModal();
  }
  const handleDelete = (id) => {
    setCourseGoals((courseGoals) =>
      courseGoals.filter((goal) => goal.id !== id)
    );
  };
  const handleAddModal = () => {
    setModalIsVisible(true);
  };

  const handleCloseModal = () => {
    setModalIsVisible(false);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.addGoalBtn}>
        <Button
          title="Add New Goal"
          style={{ color: "#5e0acc" }}
          onPress={handleAddModal}
          color="#fff"
        />
      </View>

      <GoalInput
        addGoalHandler={addGoalHandler}
        modalIsVisible={modalIsVisible}
        handleCloseModal={handleCloseModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem itemData={itemData} handleDelete={handleDelete} />
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  addGoalBtn: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    padding: 5,
  },
});
