import IGenericRepository from "./IGenericRepository";

interface IApoliceTipo<T> extends IGenericRepository<T> {
    getApoliceTipoByApoliceID(id: string): Promise<T>;
}

export default IApoliceTipo;