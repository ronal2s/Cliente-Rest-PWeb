import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"
import Slide from "./slide";

type IProps = {
    cash: number,
    show: boolean
}

function FixedNotification(props: IProps) {

    if (props.show) {
        return (
            <Slide>
                <View style={{
                    backgroundColor: "#e74c3c",
                    width: "100%",
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 10
                }} >
                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }} >
                        <Icon name="alert-circle" color="white" size={24} />
                        <Text style={{ color: "white", fontWeight: "bold" }} >ALERTA</Text>
                    </View>
                    <Text style={{ color: "white", textAlign: "center" }}>Ha excedido su limite de caja RD${props.cash}. Diríjase a la entidad bancaria mas cercana y realice el deposito.</Text>
                </View>
            </Slide>
        )
    }
    return <View />
}

export default FixedNotification;