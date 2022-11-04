import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131016",
  },

  eventName: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 48,
  },

  eventDate: {
    fontSize: 16,
    color: "#6B6B6B",
  },

  form: {
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
    flexDirection: "row",
  },

  input: {
    color: "#FFF",
    flex: 1,
    height: 56,
    padding: 16,
    borderRadius: 5,
    marginRight: 12,
    backgroundColor: "#1F1E25",
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#31CF67",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },

  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
})
