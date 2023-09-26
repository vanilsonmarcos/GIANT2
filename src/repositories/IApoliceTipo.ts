import ApoliceTipo from "../entities/Apolice/ApoliceTipo";
import IGenericRepository from "./IGenericRepository";

interface IApoliceTipo<T extends ApoliceTipo> extends IGenericRepository<T> {
    getApoliceTipoByApoliceID(id:String): Promise<T|Boolean>;
    addApoliceTipo(apoliceTipo: ApoliceTipo):Promise<Boolean>
}

export default IApoliceTipo;