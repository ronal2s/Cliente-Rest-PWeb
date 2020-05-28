import axios from "axios";
import { URL_API } from "./constants";
import { ILogin } from "./apiInterfaces";

export async function onLogin(user: string, password: string, callback: (error: boolean, json: ILogin) => void) {
    let error: boolean = false;
    // axios.get(`${URL_API}/api/routes/auth/${user}:${password}/`)
    //     .then(result => callback(error, result.data))
    //     .catch(error => {
    //         console.error(error);
    //         error = true;
    //         callback(error, null)
    //     })
    callback(error, {cod: "01"})
}