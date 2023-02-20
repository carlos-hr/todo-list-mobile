import { StyleSheet } from "react-native";
import { colors } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
    height: 180,
    borderTopColor: colors.gray400,
    borderTopWidth: 1,
    paddingTop: 20,
  },

  emptyListText: {
    color: colors.gray300,
  },

  boldText: {
    fontWeight: "700",
    color: colors.gray300,
  },
});
