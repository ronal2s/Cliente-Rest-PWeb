import React from "react";
import { Input, Icon } from "react-native-elements";
import { ReturnKeyTypeOptions, KeyboardTypeOptions } from "react-native";

type InputProps = {
    placeholder?: string,
    label?: string,
    labelStyle?: object,
    returnKeyType?: ReturnKeyTypeOptions,
    name: string,
    password?: boolean,
    value?: string | number,
    errorMessage?:string,
    icon?:string,
    iconColor?:string,
    keyboardType?: KeyboardTypeOptions,
    textArea?:boolean,
    // setRef?: React.MutableRefObject<any>
    setRef?: (nameInput: string, ref: any) => void,
    onSubmitEditing?: () => void,
    onChangeText?: (name: string, text: string | number) => void,
}

function _Input(props: InputProps) {
    return (
        <Input placeholder={props.placeholder} value={props.value?props.value.toString():""} label={props.label} labelStyle={props.labelStyle} secureTextEntry={props.password}
            returnKeyType={props.returnKeyType} onSubmitEditing={props.onSubmitEditing} onChangeText={(text) => props.onChangeText(props.name, text)} 
            ref={(ref) => props.setRef? props.setRef(props.name, ref): console.log(ref)} errorMessage={props.errorMessage} leftIcon={props.icon?{type: 'material-community', name: props.icon, color: props.iconColor? props.iconColor: "#A9A9A9"}: undefined}
            keyboardType={props.keyboardType} numberOfLines={props.textArea? 3: 1}
            />

    )
}

export default _Input;