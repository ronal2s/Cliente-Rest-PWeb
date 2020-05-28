import { StyleSheet } from "react-native";

const PRIMARY_COLOR = "#3B4CCA"

export default StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    cardView: {
        width: 100,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    cardText: {
        fontWeight: "100",
        color: "white",
        fontSize: 18
    },
    menuHome: {
        padding: 10,
        // flex: 0.6,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
    }
})