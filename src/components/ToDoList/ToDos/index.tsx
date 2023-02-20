import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { EmptyList } from "../EmptyList";
import { Task } from "../Task";
import { TaskInterface } from "../types";
import { styles } from "./styles";
import DropDownPicker from "react-native-dropdown-picker";

interface ToDosProps {
  tasksList: TaskInterface[];
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  sortTasks: (sort: string) => void;
}

export function ToDos(props: ToDosProps) {
  const { tasksList, sortTasks } = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const sortOptions = [
    {
      label: "A-Z",
      value: "alphabetical",
    },
    {
      label: "Recentes",
      value: "createdAt",
    },
    {
      label: "Concluídas",
      value: "done",
    },
  ];

  useEffect(() => {
    sortTasks(dropdownValue);
  }, [dropdownValue]);

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
        <View style={dropdownOpen ? styles.dropdownContainer : undefined}>
          {tasksList.length > 0 && (
            <DropDownPicker
              open={dropdownOpen}
              value={dropdownValue}
              items={sortOptions}
              setOpen={setDropdownOpen}
              setValue={setDropdownValue}
              zIndex={1000}
              zIndexInverse={1000}
            />
          )}
        </View>
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
