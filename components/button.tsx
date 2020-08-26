import React from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { Button as Button_ } from "react-native-elements";
import { COLORS } from "../utils/enums";

type ButtonProps = {
    onPress?: () => void,
    title: string,
    raised?: boolean,
    type?: "clear" | "outline" | "solid",
    icon?: string,
    loading?: boolean,
    iconColor?: string,
    iconSize?: number,
    buttonColor?: string,
    disabled?: boolean,
}

function CustomButton(props: ButtonProps) {
    if (props.icon) {
        return (
            <Button_ title={props.title} raised={props.raised} type={props.type} loading={props.loading} icon={
                <Icon name={props.icon} size={props.iconSize ? props.iconSize : undefined}
                    color={props.type == "outline" ? (props.iconColor ? props.iconColor : "#4388d6") : (props.iconColor ? props.iconColor : "white")}
                    style={{ marginRight: 10 }} />
            }
                onPress={props.onPress}
                containerStyle={{ marginTop: 10 }}
            />

        )
    }

    return (
        <Button_ title={props.title} raised={props.raised} type={props.type} disabled={props.disabled}
            buttonStyle={{ backgroundColor: props.type == "outline" ? "rgba(0,0,0,0)" : props.type == "solid" ? props.buttonColor ? props.buttonColor : COLORS.THEME_BLUE : props.buttonColor ? props.buttonColor : COLORS.THEME_BLUE, borderColor: props.buttonColor ? props.buttonColor : COLORS.THEME_BLUE }}
            titleStyle={{ color: props.type == "outline" && props.buttonColor ? props.buttonColor : "white" }}
            onPress={props.onPress} containerStyle={{ marginTop: 10 }} loading={props.loading}
        />

    )
}

export default CustomButton;