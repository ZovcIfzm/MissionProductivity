import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "25%",
    margin: "1%",
    padding: "1%",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    flex: 1,
    fontSize: "50px",
    alignSelf: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  cell: {
    display: "flex",
    flex: 1,
    border: "1px solid gray",
    borderRadius: "3px",
  },
});

export default styles;
