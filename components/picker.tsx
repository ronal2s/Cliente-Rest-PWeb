import React from "react";
import { ReturnKeyTypeOptions, KeyboardTypeOptions, Picker, Text, View } from "react-native";
import globalStyles from "../globalStyles";

type PickerProps = {
    selectedValue: string | number,
    name: string,
    label?: string,
    rounded?: boolean,
    areObjects?: boolean,
    objectLabel?: string,
    onValueChange: (name, value) => void,
    items: string[] | {}[] | [],
    width?: number
}

function CustomPicker(props: PickerProps) {
    const fixedItems = props.objectLabel ? props.items.map((value) => value[props.objectLabel]) : props.items;
    let auxValue = ""
    return (
        <View style={{ width: props.width ? props.width : "100%", }} >
            {props.label && <Text style={globalStyles.label} >{props.label}</Text>}
            <View style={[props.rounded ? roundedStyle : {}, props.rounded ? shadow : {}, { marginBottom: 20, marginHorizontal: 10 }]} >
                <Picker
                    selectedValue={props.selectedValue}
                    onValueChange={(itemValue, itemIndex) => props.onValueChange(props.name, props.areObjects ? props.items[itemIndex-1]: itemValue)}>
                    <Picker.Item label={"Select"}  value={-1} />
                    {fixedItems.map((value, index) => {
                        auxValue = value.toString();
                        auxValue = auxValue[0].toUpperCase() + auxValue.substr(1);
                        return <Picker.Item label={auxValue} value={props.areObjects? props.items[index]: auxValue} key={index} />
                    })}
                </Picker>
            </View>
        </View>
    )
}

const roundedStyle = {
    backgroundColor: "#ecf0f1",
    height: 50,
    borderRadius: 25,
    borderBottomWidth: 0,
    paddingLeft: 10
}

const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
}

export default CustomPicker;