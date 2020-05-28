import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import globalStyles from "../globalStyles";

type ButtonProps = {
    onPress?: () => void,
    color: string,
    icon?: string,
    text: string
}

function circleButton(props: ButtonProps) {
    return (
        <TouchableOpacity onPress={props.onPress} >
        <View style={[globalStyles.circleButton, globalStyles.shadow, {backgroundColor: props.color}]} >
            <Icon name={props.icon} color="white" size={32} />
        </View>
        <Text style={{
            color: "black",
            textAlign: "center",
            fontWeight: "200"
        }} >
            {props.text}
        </Text>
    </TouchableOpacity>

    )
}

export default circleButton;