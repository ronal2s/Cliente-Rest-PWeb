import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import globalStyles from "../globalStyles";
import Slide from "./slide";

type ButtonProps = {
    onPress?: () => void,
    color: string,
    icon?: string,
    text?: string,
    slideDelay?: number,
    imgSource?: { uri: string },
    imgSize?: number,
    circleSize?: number,
    slide?: boolean,
}

function CircleButton(props: ButtonProps) {
    if (!props.slideDelay) {
        return (
            <TouchableOpacity onPress={props.onPress} >
            {!props.imgSource && <View style={[globalStyles.circleButton, globalStyles.shadow, { backgroundColor: props.color, width: props.circleSize ? props.circleSize : 100, height: props.circleSize ? props.circleSize : 100, borderRadius: props.circleSize ? props.circleSize / 2 : 100 / 2 }]} >
                <Icon name={props.icon} color="white" size={32} />
            </View>}
            {props.imgSource && <View style={[globalStyles.circleButton, globalStyles.shadow, { backgroundColor: props.color }]} >
                <Image source={props.imgSource} style={{ width: props.imgSize ? props.imgSize : 100, height: props.imgSize ? props.imgSize : 100 }} resizeMode="contain" />
            </View>}
            <Text style={{
                color: "black",
                textAlign: "center",
                fontWeight: "200"
            }} >
                {props.text}
            </Text>
        </TouchableOpacity>
            )
    } else {
        return (
            <Slide delay={props.slideDelay} >
                <TouchableOpacity onPress={props.onPress} >
                    {!props.imgSource && <View style={[globalStyles.circleButton, globalStyles.shadow, { backgroundColor: props.color, width: props.circleSize ? props.circleSize : 100, height: props.circleSize ? props.circleSize : 100, borderRadius: props.circleSize ? props.circleSize / 2 : 100 / 2 }]} >
                        <Icon name={props.icon} color="white" size={32} />
                    </View>}
                    {props.imgSource && <View style={[globalStyles.circleButton, globalStyles.shadow, { backgroundColor: props.color }]} >
                        <Image source={props.imgSource} style={{ width: props.imgSize ? props.imgSize : 100, height: props.imgSize ? props.imgSize : 100 }} resizeMode="contain" />
                    </View>}
                    <Text style={{
                        color: "black",
                        textAlign: "center",
                        fontWeight: "200"
                    }} >
                        {props.text}
                    </Text>
                </TouchableOpacity>
            </Slide>
    
        )
    }
}

export default CircleButton;