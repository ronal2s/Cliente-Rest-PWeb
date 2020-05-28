import { createContext } from "react";

export interface IUser {
    collector_id: string,
    collector_token: string,
    cod: string,
    info: {
        id: number,
        name: string
    },
    routes: {
        id: number,
        name: string
    }[],
    logged: boolean,
    //User Limit
    cash: number,
    cashExceed: boolean,
    setUser: React.Dispatch<React.SetStateAction<IUser>>,
}
export const UserContext = createContext<IUser | null>(null);