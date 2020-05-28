import React, { useContext } from "react";
import { View } from "react-native";
import { GlobalContext } from "../../contexts/globalContexts";
import { ListItem } from "react-native-elements";

function Customers(props) {
    const globalContexts = useContext(GlobalContext);

    const logOut = () => {
        globalContexts.setContext({ user: { ...globalContexts.user, logged: false } })
    }
    return (
        <View >
            <View>
                <ListItem title="Ajustes #1" chevron leftAvatar={{ title: "A1" }} bottomDivider />
                <ListItem title="Ajustes #2" chevron leftAvatar={{ title: "A2" }} bottomDivider />
                <ListItem title="Ajustes #3" chevron leftAvatar={{ title: "A3" }} bottomDivider />
                <ListItem title="Cerrar sesión" chevron leftAvatar={{ title: "C" }} bottomDivider onPress={logOut} />
            </View>
        </View>
    )
}

export default Customers