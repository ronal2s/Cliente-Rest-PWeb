import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
//Utils
import { COLORS } from "../utils/enums";
//Styles
import globalStyles from "../globalStyles";

type FabProps = {
    onPress: () => void
}

function FabButton(props: FabProps) {
 
    return (

        <View
            style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                // backgroundColor: "rgba(0,255,0,1)",
                height: 250,
                width: 100
            }} >


            <View style={{
                position: "absolute",
                top: 180,
                left: 25,
                backgroundColor: COLORS.PRIMARY_DARK,
                borderWidth: 1,
                borderColor: "gray",
                height: 60,
                width: 60,
                borderRadius: 60 / 2,
                justifyContent: "center",
                alignItems: "center",
                ...globalStyles.shadow
            }} >
                <TouchableOpacity onPress={props.onPress}  >
                    <Icon name={"plus"} color="white" size={32} />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default FabButton;