import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Screens
import Home from "../screens/home";
import Login from "../screens/login";
import CustomAlert from "../components/customAlert";
//Styles
import styles from "../globalStyles"
//Utils
import { GlobalContext, IGlobalContexts } from '../contexts/globalContexts';
import { Screens } from '../utils/enums';
import { IAppContainer } from './container.d';
import Settings from './settings';


const Stack = createStackNavigator();
const headerOptions = ({ navigation }) => ({
    headerStyle: styles.headerHome, headerTintColor: "white"
})

function AppContainer(props: IAppContainer) {
    const { globalContext } = props;
    return (
        <GlobalContext.Provider value={{ ...globalContext.context, setContext: globalContext.setContext }}>
            {globalContext.context.user.logged ?
                <Stack.Navigator screenOptions={headerOptions} >
                    <Stack.Screen name={Screens.Home} component={Home} />
                    <Stack.Screen name={Screens.Settings} component={Settings} />
                </Stack.Navigator>
                :
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Screens.Login} >
                    <Stack.Screen name={Screens.Login} component={Login} />
                </Stack.Navigator>
            }
        </GlobalContext.Provider>
    )

}

function App() {    
    const [context, setContext] = useState<IGlobalContexts>({
        alert: { open: false, title: "", content: "", success: false },
        user: { logged: false, typeApp: "Cobrador" }
    });
    
    const auxSetContext = (object) => {
        //This is a great solution to keep the state ever updated
        const keys = Object.keys(object);
        keys.forEach(keyValue => {
            setContext({ ...context, [keyValue]: object[keyValue] })            
        })
    }

    const closeAlert = () => {
        setContext({ ...context, alert: { ...context.alert, open: false } })
    }

    return (
        <NavigationContainer>
            <AppContainer globalContext={{ context, setContext: auxSetContext }} />
            <CustomAlert open={context.alert.open} title={context.alert.title} content={context.alert.content} success={context.alert.success} onClose={closeAlert} />
        </NavigationContainer>
    );
}


export default App;