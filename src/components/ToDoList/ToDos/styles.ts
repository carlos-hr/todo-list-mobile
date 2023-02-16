import { StyleSheet } from "react-native";
import { colors } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  todoInfos: {
    flexDirection: "row",
    height: 19,
  },

  created: {
    color: colors.blue,
    fontWeight: "700",
  },

  done: {
    color: colors.purpleDark,
    fontWeight: "700",
  },

  counter: {
    borderRadius: 999,
    backgroundColor: colors.gray400,
    marginLeft: 8,
    textAlignVertical: "center",
    height: "100%",
    width: 25,
    textAlign: "center",
    fontWeight: "700",
  },
});
