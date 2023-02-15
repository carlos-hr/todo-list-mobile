import { View } from "react-native";
import { Header } from "../../components/Header";
import { ToDoList } from "../../components/ToDoList";
import { styles } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <ToDoList />
      </View>
    </>
  );
}
