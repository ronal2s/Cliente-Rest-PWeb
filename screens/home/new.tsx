import React, { useEffect, useContext, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { Card, ListItem } from "react-native-elements";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

//Custom Components
import CircleButton from "../../components/circleButton";
//Utils
import { GlobalContext } from "../../contexts/globalContexts";
import { Screens, COLORS } from "../../utils/enums";

//Style
import styles from "./styles";
import Separator from "../../components/separator";
import CustomInput from "../../components/input";
import CustomPicker from "../../components/picker";
import CustomButton from "../../components/button";
import { newItem } from "../../utils/api";
import { AlertContext } from "../../contexts/alertContext";
import { makeAlert } from "../../utils/functions";


function NewItem(props) {
    const { navigation } = props;
    const [form, setForm] = useState({ nombre: "", sector: "", nivelEscolar: "", latitud: 19.4406719, longitud: -70.68896 })

    const globalContexts = useContext(GlobalContext);
    const alertContexts = useContext(AlertContext);

    useEffect(() => {
        getLocation();
    }, []);

    useEffect(() => {
        navigation.setOptions({
            title: "Formulario",
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate(Screens.Settings)} style={{ marginRight: 10 }} >
                    <Icon name="cog" color="white" size={22} />
                </TouchableOpacity>
            )

        })
    }, []);

    const getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location.coords)
        setForm({ ...form, latitud: location.coords.latitude, longitud: location.coords.longitude })
    }


    const handleInputs = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    }

    const onNewItem = () => {
        newItem(form.nombre, form.sector, form.nivelEscolar, form.latitud, form.longitud, (error, json) => {
            console.log(json)
            if (!error) {
                if(!json.error) {
                    makeAlert(alertContexts, "Notificatión", "Item agregado correctamente", true);
                    setForm({ ...form, nombre: "", sector: "", nivelEscolar: "" })
                } else {
                    makeAlert(alertContexts, "Error", "Ha ocurrido un error en el servidor", false);
                }
            }
        })
    }


    return (
        <View style={{ flex: 1 }} >
            <CustomInput label="Nombre" name="nombre" value={form.nombre} rounded onChangeText={handleInputs} />
            <CustomInput label="Sector" name="sector" value={form.sector} rounded onChangeText={handleInputs} />
            <CustomPicker label="Nivel Escolar" name="nivelEscolar" selectedValue={form.nivelEscolar} items={["Basico", "Medio", "Universitario", "Postgrado", "Doctorado"]} rounded onValueChange={handleInputs} />

            <Card>
                <MapView style={{
                    width: "100%",
                    height: 300,
                }}
                    region={{ latitudeDelta: 0.00001231, longitudeDelta: 0.00001313, longitude: form.longitud, latitude: form.latitud }}

                    scrollEnabled={false}
                >
                    <Marker coordinate={{ longitude: form.longitud, latitude: form.latitud }} description="Estás aquí" />
                </MapView>
            </Card>
            <View style={{ flex: 1, justifyContent: "flex-end" }} >
                <CustomButton title="Guardar" buttonColor={COLORS.PRIMARY_DARK} onPress={onNewItem} />
            </View>
        </View>
    )
}

export default NewItem;