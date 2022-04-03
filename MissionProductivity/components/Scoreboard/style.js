import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    flex: 1,
    fontSize: 50,
    alignSelf: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    display: "flex",
    flex: 1,
  },
});

export default styles;
