export interface ILogin {
    error: boolean,
}

export interface IItems {
    formularios: {
        id: number, 
        nombre: string,
        sector: string,
        nivelEscolar: string,
        latitud: number,
        longitud: number
    }[]
}