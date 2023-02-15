import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function ToDoList() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Adicione uma nova tarefa" style={styles.input} />
      <TouchableOpacity style={styles.newTask}>
        <Text style={styles.plusSign}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
