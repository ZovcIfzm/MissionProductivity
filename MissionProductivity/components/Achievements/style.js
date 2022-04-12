import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 6,
  },
  container_trophy: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    borderRadius: 6,
  },
  trophy_row: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 6,
  },
  trophy_slot: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    fontSize: 12,
  },
  trophy: {
    width: 100,
    height: 100,
  },
  title: {
    flex: 1,
    fontSize: 20,
    alignSelf: "center",
  },
});

export default styles;
