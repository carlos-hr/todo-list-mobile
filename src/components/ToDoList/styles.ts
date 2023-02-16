import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: -54,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    height: 54,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    flex: 1,
    padding: 16,
    color: colors.gray300,
  },

  newTask: {
    width: 52,
    height: 52,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 4,
  },

  plusSign: {
    width: 20,
    height: 20,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 999,
    borderColor: "white",
  },
});
