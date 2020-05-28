import React from "react";
import { View, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
//Custom components
import FixedNotification from "./cashNotification";

interface CustomViewProps {
    showNotification: boolean,
    cash: number,
    children: React.ReactNode,
    height?: string
}

function CustomView(props: CustomViewProps) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{height: props.height? props.height: "100%"}} >
                <ScrollView>
                    <FixedNotification show={props.showNotification} cash={props.cash} />
                    {props.children}
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CustomView;