interface IApoliceEstado<T> {
    getAllApoliceEstado(): Promise<T[]>;
    getApoliceEstado(apoliceID: string): Promise<T>;
    setApoliceEstado(apoliceID: string, apoliceEstado: T): Promise<T>;
}

export default IApoliceEstado;