import React, { useEffect, useContext, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, ListView, Linking } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { Card, ListItem } from "react-native-elements";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

//Custom Components
import CircleButton from "../../components/circleButton";
//Utils
import { GlobalContext } from "../../contexts/globalContexts";
import { Screens } from "../../utils/enums";

//Style
import styles from "./styles";
import Separator from "../../components/separator";
import CustomInput from "../../components/input";
import CustomPicker from "../../components/picker";
import CustomButton from "../../components/button";
import CustomFabButton from "../../components/fabButtonItems";
import { getItems } from "../../utils/api";


function Home(props) {
    const { navigation } = props;
    const [data, setData] = useState([]);
    const [location, setLocation] = useState(null);

    const globalContexts = useContext(GlobalContext);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // globalContexts.setContext(({ actualTabView: "Profile" }));
            getData();
        });
        return unsubscribe;
    }, [])

    useEffect(() => {
        navigation.setOptions({
            title: "Formulario",
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate(Screens.Settings)} style={{ marginRight: 10 }} >
                    <Icon name="cog" color="white" size={22} />
                </TouchableOpacity>
            )

        })

        getData();

    }, []);

    const getData = () => {
        getItems((error, json) => {
            if (!error) {
                console.log(json)
                setData([...json.formularios])
            }
        })
    }

    const newForm = () => {
        navigation.navigate(Screens.NewItem)
    }


    return (
        <View style={{ flex: 1 }} >

            <View>
                {data.map((item, key) => {
                    return (
                        <ListItem leftAvatar={{ title: item.nombre[0] }} title={item.nombre} subtitle={`${item.sector}, ${item.nivelEscolar}`} key={key} bottomDivider chevron 
                            onPress={() => Linking.openURL(`https://www.google.com/maps/@${item.latitud},${item.longitud},15.5z`)}
                        />
                    )
                })}

            </View>
            <CustomFabButton onPress={newForm} />
        </View>
    )
}

export default Home;