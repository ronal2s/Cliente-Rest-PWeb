import { IGlobalContexts } from "../contexts/globalContexts"

export interface IAppContainer {
    globalContext: { context: IGlobalContexts, setContext: React.Dispatch<React.SetStateAction<IGlobalContexts>> },
    alertContext: { context: IAlert, setContext: React.Dispatch<React.SetStateAction<IAlert>> },
}