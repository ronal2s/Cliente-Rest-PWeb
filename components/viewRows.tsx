import React from "react";
import { View, Text } from "react-native";
import globalStyles from "../globalStyles";

type ViewProps = {
    children: React.ReactNode,
    title?: string,
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}


function ViewRows(props: ViewProps) {
    return (
        <>
            <Text style={globalStyles.label} >Imprimir</Text>
            <View style={{ flexDirection: "row" }} >
                {props.children}
            </View>
        </>
    )
}

export default ViewRows;