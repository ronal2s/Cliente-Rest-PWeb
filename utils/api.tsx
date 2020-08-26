import axios from "axios";
import { URL_API } from "./constants";
import { ILogin, IItems } from "./apiInterfaces";

export async function onLogin(user: string, password: string, callback: (error: boolean, json: ILogin) => void) {
    let error: boolean = false;
    axios.get(`${URL_API}/loginAPI?user=${user}&password=${password}`, { data: { user, password } })
        .then(result => callback(error, result.data))
        .catch(error => {
            console.error(error);
            error = true;
            callback(error, null)
        })
}

export async function newItem(nombre: string, sector: string, nivelEscolar: string, latitud: number, longitud: number, callback: (error: boolean, json: {error: boolean}) => void) {
    let error: boolean = false;
    axios.get(`${URL_API}/nuevoItemAPI`, { params: { nombre, sector, nivelEscolar, latitud, longitud } })
        .then(result => callback(error, result.data))
        .catch(error => {
            console.error(error);
            error = true;
            callback(error, null)
        })
}

export async function getItems(callback: (error: boolean, json: IItems) => void) {
    let error: boolean = false;
    axios.get(`${URL_API}/listadoAPI`)
        .then(result => callback(error, result.data))
        .catch(error => {
            alert(error);
            error = true;
            callback(error, null)
        })
}