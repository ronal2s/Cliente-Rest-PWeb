import { StyleSheet } from "react-native";
import { COLORS } from "../utils/enums";


export default StyleSheet.create({
    headerHome: {
        backgroundColor: COLORS.PRIMARY,
    },
    inputLabel: {
        fontWeight: "200"
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
        height: 50,
        borderRadius: 5,
        borderBottomWidth: 0,
        paddingLeft: 10,
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
    textShadow: {
        textShadowColor: "black",
        textShadowRadius: 10,
        textShadowOffset: { width: 0, height: 1 }
    },
    label: {
        fontWeight: "bold",
        // color: "#86929e",
        color: COLORS.GRAY,
        fontSize: 16,
        marginLeft: 10,
    },
    circleButton: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        // marginHorizontal: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",        
    }
})