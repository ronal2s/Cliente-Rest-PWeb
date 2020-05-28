import { createContext } from "react";
import { IAlert } from "./alertContext";

export interface IUser {    
    cod?: string,    
    logged: boolean,
    typeApp?: string,
    //User Limit
    cash?: number,
    cashExceed?: boolean,
}

export interface IGlobalContexts {
    user?: IUser,
    alert?: IAlert,
    setContext?: React.Dispatch<React.SetStateAction<IGlobalContexts>>,
}
export const GlobalContext = createContext<IGlobalContexts | null>(null);