import React from "react";
import { Input, Icon } from "react-native-elements";
import { ReturnKeyTypeOptions, KeyboardTypeOptions, Picker, Text } from "react-native";

type PickerProps = {
    selectedValue: string,
    name: string,
    label: string,
    areObjects?: boolean,
    objectLabel?: string,
    onValueChange: (name, value) => void,
    items: string[] | {}[] | []
}

function _Input(props: PickerProps) {
    const fixedItems = props.objectLabel? props.items.map((value) => value[props.objectLabel]): props.items;
    // console.warn(Object.(props.selectedValue))
    return (
        <>
        <Text style={{
            fontWeight: "bold",
            color: "#86929e",
            fontSize: 16,
            marginLeft: 10,
        }} >{props.label}</Text>
        <Picker
        selectedValue={props.selectedValue}
        // style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => props.onValueChange(props.name, itemValue)}
        >
            {/* Recordar que si el value no es el string, hay que modificar el componente */}
            <Picker.Item label={"Seleccionar"} value={-1} />
            {fixedItems.map((value, index) => {
                return <Picker.Item label={value} value={value} key={index} />
            })}
        </Picker>
        </>
    )
}

export default _Input;