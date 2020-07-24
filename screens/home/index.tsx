import React, { useEffect, useContext } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5 as Icon } from "@expo/vector-icons"
import { Card, ListItem } from "react-native-elements";
//Custom Components
import CircleButton from "../../components/circleButton";
//Utils
import { GlobalContext } from "../../contexts/globalContexts";
import { Screens } from "../../utils/enums";

//Style
import styles from "./styles";
import Separator from "../../components/separator";


function Home(props) {
    const { navigation } = props;
    const globalContexts = useContext(GlobalContext);

    useEffect(() => {
        navigation.setOptions({
            title: "Home",
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate(Screens.Settings)} style={{ marginRight: 10 }} >
                    <Icon name="cog" color="white" size={22} />
                </TouchableOpacity>
            )

        })
    })

    return (
        <View >
            <View style={styles.menuHome} >

                <CircleButton text="Rutas" color="#D84315" icon="map-signs"/>

                <CircleButton text="Reportes" color="#F9A825" icon="file-invoice" slideDelay={100} />

                <CircleButton text="Configurar" color="#00695C" icon="cogs" slideDelay={200} />

            </View>
            <Separator />
            <View>
                <ScrollView>
                    <Text style={{
                        textAlign: "center",
                        fontWeight: "400",
                    }} >Notificaciones</Text>
                    <Card title="Hoy"  >
                        <ListItem title="Miguel Baez" subtitle="Dirección" chevron leftAvatar={{ title: "M" }} bottomDivider />
                        <ListItem title="Santos Brito" subtitle="Dirección" chevron leftAvatar={{ title: "S" }} bottomDivider />
                    </Card>
                    <Card title="Pendiente a cobrar"  >
                        <ListItem title="Jordan De La Cruz" subtitle="Dirección" chevron leftAvatar={{ title: "J" }} bottomDivider />
                        <ListItem title="Carlos Ventura" subtitle="Dirección" chevron leftAvatar={{ title: "C" }} bottomDivider />
                    </Card>
                </ScrollView>


            </View>

        </View>
    )
}

export default Home;