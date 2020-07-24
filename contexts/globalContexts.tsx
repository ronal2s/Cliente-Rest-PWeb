import { createContext } from "react";
import { IAlert } from "./alertContext";

export interface IUser {    
    logged: boolean,
}

export interface IGlobalContexts {
    user?: IUser,
    setContext?: React.Dispatch<React.SetStateAction<IGlobalContexts>>,
}
export const GlobalContext = createContext<IGlobalContexts | null>(null);