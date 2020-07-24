
import * as SecureStorage from "expo-secure-store";

export const getUIDCode = () => {
    var d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
};

export function toCapitalize(text: string) {
    return text[0].toUpperCase() + text.substr(1);
}

export function isEmpty(text: string) {
    return text.length == 0;
}

export function getStorage(key: string) {
    return SecureStorage.getItemAsync(key)
}

export function setStorage(key: string, value: string) {
    return SecureStorage.setItemAsync(key, value)
}

export async function getBlob(uri: string) {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
}

export const makeAlert = (alertContext: any, title: string, content: string, success: boolean) => {
    alertContext.setAlert({ title, content, success, open: true })
}