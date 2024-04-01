import { StyleSheet } from "react-native";

const bookmarkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7ff",
    flex: "1",
  },

  mainHandler: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 20,
  },

  itemContainer: {
    backgroundColor: "white",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
  },

  imgItem: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },

  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemInfo: {
    marginLeft: 30,
    marginLeft: 15,
  },

  itemRemove: {
    position: "absolute",
    right: 12,
  },

  minusIcon: {
    fontSize: 16,
  },

  dishTitle: {
    fontSize: 18,
    fontWeight: "600",
    width: 120,
    flexWrap: "wrap",
  },

  category: { color: "gray" },
});

export default bookmarkStyles;
