import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ToDos } from "./ToDos";
import { TaskInterface } from "./types";

export function ToDoList() {
  const [tasksList, setTasksList] = useState<TaskInterface[]>([]);
  const [newTask, setNewTask] = useState("");

  function generateId() {
    return Math.floor(Math.random() + new Date().getTime()).toString();
  }

  function handleTaskInput(task: string) {
    setNewTask(task);
  }

  function addNewTask() {
    const id = generateId();

    if (newTask.length === 0) {
      return Alert.alert(
        "Inserir nome",
        "Favor inserir um nome para o novo usuário"
      );
    }

    setTasksList((state) => [
      ...state,
      { id, description: newTask, done: false, createdAt: new Date() },
    ]);

    setNewTask("");
  }

  function deleteTask(id: string) {
    const newList = tasksList.filter((task) => task.id !== id);
    setTasksList(newList);
  }

  function toogleTask(id: string) {
    const newList = tasksList.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    });

    setTasksList(newList);
  }

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          style={styles.input}
          onChangeText={handleTaskInput}
          value={newTask}
        />
        <TouchableOpacity style={styles.newTask} onPress={addNewTask}>
          <Text style={styles.plusSign}>+</Text>
        </TouchableOpacity>
      </View>
      <ToDos
        tasksList={tasksList}
        deleteTask={deleteTask}
        toggleTask={toogleTask}
      />
    </>
  );
}
