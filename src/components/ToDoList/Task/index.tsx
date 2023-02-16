import Checkbox from "expo-checkbox";
import { Pressable, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../../styles/theme";
import { styles } from "./styles";
import { TaskInterface } from "../types";

interface TaskProps {
  task: TaskInterface;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

export function Task(props: TaskProps) {
  const {
    task: { id, description, done },
    deleteTask,
    toggleTask,
  } = props;

  return (
    <View style={styles.taskContainer}>
      <Checkbox
        style={styles.checkbox}
        value={done}
        onValueChange={() => toggleTask(id)}
        color={done ? colors.purpleDark : undefined}
      />

      <Text style={done ? styles.completedTask : styles.task}>
        {description}
      </Text>
      <Pressable style={styles.delete} onPress={() => deleteTask(id)}>
        <FontAwesome5 name="trash-alt" size={16} color={colors.gray300} />
      </Pressable>
    </View>
  );
}
