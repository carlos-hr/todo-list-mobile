import { View, Text } from "react-native";
import { colors } from "../../../styles/theme";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Ionicons name="clipboard-outline" size={72} color={colors.gray300} />

      <View>
        <Text style={styles.boldText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyListText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
