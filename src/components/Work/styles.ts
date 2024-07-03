import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
    backgroundColor: "#333",
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 6,
  },
  lixeira: {
    height: 16,
    width: 16,
  },
  descriptionText: {
    color: "#fdfcfe",
    fontSize: 14,
    flex: 1,
  },
  taskFind: {
    color: "#808080",
    fontSize: 14,
    textDecorationLine: "line-through",
    flex: 1,
  }
})