import { FlatList, Text, View } from "react-native";
import { EmptyList } from "../EmptyList";
import { Task } from "../Task";
import { TaskInterface } from "../types";
import { styles } from "./styles";

interface ToDosProps {
  tasksList: TaskInterface[];
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

export function ToDos(props: ToDosProps) {
  const { tasksList } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.todoInfos}>
          <Text style={styles.created}>Criadas</Text>
          <Text style={styles.counter}>0</Text>
        </View>

        <View style={styles.todoInfos}>
          <Text style={styles.done}>Concluídas</Text>
          <Text style={styles.counter}>0</Text>
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          data={tasksList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Task task={item} {...props} />}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}
