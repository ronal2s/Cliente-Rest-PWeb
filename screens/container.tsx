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
import { IAlert, AlertContext } from '../contexts/alertContext';


const Stack = createStackNavigator();
const headerOptions = ({ navigation }) => ({
    headerStyle: styles.headerHome, headerTintColor: "white"
})

function AppContainer(props: IAppContainer) {
    const { globalContext, alertContext } = props;
    return (
        <GlobalContext.Provider value={{ ...globalContext.context, setContext: globalContext.setContext }}>
            <AlertContext.Provider value={{ ...alertContext.context, setAlert: alertContext.setContext }}>

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
            </AlertContext.Provider>
        </GlobalContext.Provider>
    )

}

function App() {    
    const [context, setContext] = useState<IGlobalContexts>({
        user: { logged: false }
    });
    const [alertContext, setAlertContext] = useState<IAlert>({ open: false, title: "", content: "", success: false })
    
    const auxSetContext = (object) => {
        //This is a great solution to keep the state ever updated
        setContext({ ...context, ...object })            
    }

    const closeAlert = () => {
        setAlertContext({ ...alertContext, open: false });
    }

    return (
        <NavigationContainer>
            <AppContainer globalContext={{ context, setContext: auxSetContext }} alertContext={{ context: alertContext, setContext: setAlertContext }} />
            <CustomAlert open={alertContext.open} title={alertContext.title} content={alertContext.content} success={alertContext.success} onClose={closeAlert} />
        </NavigationContainer>
    );
}


export default App;