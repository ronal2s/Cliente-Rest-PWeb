import React, { useState, useRef, useContext, useEffect } from "react";
import { View, Dimensions, Animated, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Card, Button, Input } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';

//Custom Components
import _Input from "../../components/input";
//Utils
import { COLORS, Screens } from "../../utils/enums";
import { GlobalContext } from "../../contexts/globalContexts";
import { isEmpty } from "../../utils/functions";
import { onLogin } from "../../utils/api";
import { ILoginForm, ILoginErrors } from "./index.d";
import { InputReferences } from "../../utils/globalInterfaces";
//Styles
import viewStyles from "./styles";
import globalStyles from "../../globalStyles";
import { AlertContext } from "../../contexts/alertContext";
//Media
const Logo = require("../../assets/logo.png");
const screen = Dimensions.get("screen")


function loginScreen(props) {
    const [refPassword, setRefPassword] = useState<InputReferences>();
    const [refUser, setRefUser] = useState<InputReferences>();

    const [heightAnimated, setHeightAnimated] = useState(new Animated.Value(screen.height))
    const [borderAnimated, setBorderAnimated] = useState(new Animated.Value(0))


    const [form, setForm] = useState<ILoginForm | null>({ user: "74", password: "1234" });
    // const [form, setForm] = useState<ILoginForm | null>({ user: "0000", password: "4100" });
    const [errors, setErrors] = useState<ILoginErrors | null>({ user: "", password: "" });
    const [loading, setLoading] = useState(false);

    const { navigation } = props;
    const globalContext = useContext(GlobalContext);
    const alertContext = useContext(AlertContext);

    const toInputPassword = () => refPassword.input.focus();

    const setReferences = (nameInput: string, ref: any) => {
        switch (nameInput) {
            case "user": setRefUser(ref); break;
            case "password": setRefPassword(ref); break;
        }
    }

    const handleInputs = (name: string, text: string) => {
        form[name] = text;
        setForm({ ...form });
    }

    const login = () => {
        let error = false;
        errors.user = ""; errors.password = "";
        if (isEmpty(form.user)) {
            errors.user = "Usuario obligatorio";
            setErrors({ ...errors });
            refUser.shake();
            error = true;
        }
        if (isEmpty(form.password)) {
            errors.password = "Contraseña obligatoria";
            setErrors({ ...errors });
            refPassword.shake();
            error = true;
        }
        if (!error) {
            setLoading(true);
            increaseHeight();
            setTimeout(() => {
                onLogin(form.user, form.password, (error, json) => {
                    if (!error) {
                        globalContext.setContext({ user: { logged: true } })
                    }
                    setLoading(false);
                })

            }, 2000);
        }
    }

    useEffect(() => {
        setTimeout(() => decreaseHeight(), 300)

    }, [])

    const decreaseHeight = () => {
        Animated.timing(heightAnimated, {
            toValue: screen.height / 2,
            duration: 1500
        }).start()
        Animated.timing(borderAnimated, {
            toValue: 80,
            duration: 340
        }).start()
    }

    const increaseHeight = () => {
        Animated.timing(heightAnimated, {
            toValue: screen.height,
            duration: 1500
        }).start()
        Animated.timing(borderAnimated, {
            toValue: 0,
            duration: 1500
        }).start()
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <LinearGradient colors={["#0062b8", "#004785"]} style={viewStyles.viewContainer} >
                <Animated.View
                    style={{
                        backgroundColor: COLORS.SECONDARY,
                        position: "absolute",
                        top: 0,
                        borderBottomLeftRadius: borderAnimated,
                        borderBottomRightRadius: borderAnimated,
                        width: "100%",
                        // height: screen.height / 2,
                        height: heightAnimated,
                    }}
                />

                <Card
                    titleStyle={viewStyles.cardTitle}
                    containerStyle={[viewStyles.cardContainer, globalStyles.shadow, { borderRadius: 10 }]}>

                    <_Input placeholder="Ej: 1712" label="Usuario" name="user" value={form.user} errorMessage={errors.user} labelStyle={globalStyles.inputLabel}
                        returnKeyType="next" setRef={setReferences} onSubmitEditing={toInputPassword} onChangeText={handleInputs}
                        icon="account"/>

                    <_Input label="Contraseña" name="password" value={form.password} errorMessage={errors.password} password labelStyle={globalStyles.inputLabel}
                        returnKeyType="done" setRef={setReferences} onChangeText={handleInputs} onSubmitEditing={login}
                        icon="lock"/>

                    <View style={{ marginVertical: 10 }} />
                    <Button title="Continuar" type="outline" onPress={login} loading={loading} />


                </Card>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

export default loginScreen;