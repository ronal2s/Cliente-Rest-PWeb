import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/enums"
export default StyleSheet.create({
    viewContainer: {
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: COLORS.PRIMARY,
        flex: 1
    },
    cardTitle: {
        fontWeight: "100",
        fontSize: 22,
        // color: COLORS.PRIMARY
    },
    cardContainer: {
        width: 300
    }
})