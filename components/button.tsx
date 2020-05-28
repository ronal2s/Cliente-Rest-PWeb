import React from "react";
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { Button } from "react-native-elements";

type ButtonProps = {
    onPress?: () => void,
    title: string,
    raised?: boolean,
    type?: "clear" | "outline" | "solid",
    icon?: string,
    loading?: boolean,
    iconColor?: string,
    iconSize?: number,
}

function customButtom(props: ButtonProps) {
    if (props.icon) {
        return (
            <Button title={props.title} raised={props.raised} type={props.type} loading={props.loading} icon={
                <Icon name={props.icon} size={props.iconSize?props.iconSize: undefined}
                    color={props.type == "outline"? (props.iconColor ? props.iconColor :"#4388d6") :(props.iconColor ? props.iconColor : "white")}
                    style={{ marginRight: 10}} />
            }
                onPress={props.onPress}
                containerStyle={{marginTop: 10}}
            />

        )
    }
    
    return (
        <Button title={props.title} raised={props.raised} type={props.type}
            onPress={props.onPress} containerStyle={{marginTop: 10}} loading={props.loading}
        />

    )
}

export default customButtom;