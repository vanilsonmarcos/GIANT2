import ApoliceTipo from "../entities/Apolice/ApoliceTipo";
import IGenericRepository from "./IGenericRepository";

interface IApoliceTipo<T extends ApoliceTipo> extends IGenericRepository<T> {
    getApoliceTipoByApoliceID(id:String): Promise<T>;
}

export default IApoliceTipo;