import { StyleSheet } from "react-native";
import { colors } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
  },

  dropdown: {
    zIndex: 2,
    position: "relative",
  },

  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.gray500,
    borderRadius: 8,
    minHeight: 64,
    alignItems: "center",
    padding: 12,
    marginTop: 8,
  },

  button: {
    fontSize: 8,
  },

  checkbox: {
    marginRight: 8,
    borderRadius: 999,
    borderColor: colors.blue,
  },

  task: {
    flexGrow: 1,
    flexWrap: "wrap",
    flexShrink: 1,
  },

  completedTask: {
    textDecorationLine: "line-through",
    flexGrow: 1,
    flexWrap: "wrap",
    flexShrink: 1,
    color: colors.gray300,
    fontStyle: "italic",
  },

  delete: {
    marginLeft: 8,
  },
});
