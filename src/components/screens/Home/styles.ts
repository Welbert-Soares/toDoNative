import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    width: "100%",
    position: "relative",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    position: "absolute",
    top: 100,
  },
  textInput: {
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#fdfcfe",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 6,
  },
  button: {
    backgroundColor: "#1E6F9F",
    width: 56,
    height: 56,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    height: 20,
    width: 20,
  },
  progres: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginTop: 30,
    width: "100%",
  },
  progresCreate: {
    color: "#4EA8DE",
    fontSize: 14,
  },
  progresCheck: {
    color: "#8284FA",
    fontSize: 14,
  },
  count: {
    flexDirection: "row",
    gap: 10,
  },
  countView: {
    color: "#D9D9D9",
    fontSize: 14,
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 1,
    width: 30,
    textAlign: "center",
  },
  row: {
    height: 2,
    backgroundColor: "#333",
    width: "100%",
  },
  noTask: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noTaskImage: {
    height: 56,
    width: 56,
    marginTop: 20,
    marginBottom: 20,
  },
  noTaskBold: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "bold",
  },
  noTaskRegular: {
    color: "#808080",
    fontSize: 14,
  }
});