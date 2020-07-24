import { StyleSheet } from "react-native";
import { COLORS } from "../utils/enums";


export default StyleSheet.create({
    headerHome: {
        backgroundColor: COLORS.PRIMARY,
    },
    inputLabel: {
        fontWeight: "200"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    bigTitle: {
        fontSize: 58,
        color: COLORS.PRIMARY,
        fontWeight: "bold"
    },  
    viewRows: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },  
    circleButton: {
        width: 100,
        height: 100,
        // borderRadius: 80 / 2,
        borderRadius: 100/2,
        // marginHorizontal: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",        
        borderWidth: 1,
        borderColor: "white"
    },
    inputRounded: {
        backgroundColor: "#ecf0f1",
        height: 50,
        borderRadius: 25,
        borderBottomWidth: 0,
        paddingLeft: 10
    },
    inputSquare: {
        backgroundColor: "#ecf0f1",
        // height: 50,
        height: 40,
        borderRadius: 5,
        borderBottomWidth: 0,
        paddingLeft: 10,
    },
    iconRounded: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 50 / 2,
        marginRight: 1,
    },
    label: {
        fontWeight: "bold",
        // color: "#86929e",
        color: COLORS.LABEL,
        fontSize: 16,
        marginLeft: 10,
    }
})