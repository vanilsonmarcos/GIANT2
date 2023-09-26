import { Service } from "typedi";
import { RowDataPacket } from "mysql2/promise";
import { query } from './mysql';
import IGenericRepository from "../IGenericRepository";
import IApoliceTipo from "../IApoliceTipo";
import ApoliceTipo from "../../entities/Apolice/ApoliceTipo";


@Service()
class ApoliceTipoRepository implements IApoliceTipo<ApoliceTipo> {
    constructor(){
    }
    getAll(): Promise<ApoliceTipo[]> {
        throw new Error("Method not implemented.");
    }
    getByID(id: String): Promise<ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
    create(item: ApoliceTipo): Promise<ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
    update(id: String, item: ApoliceTipo): Promise<ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    getApoliceTipoByApoliceID(id: String): Promise<Boolean | ApoliceTipo> {
        throw new Error("Method not implemented.");
    }
    addApoliceTipo(apoliceTipo: ApoliceTipo): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}

export default ApoliceTipoRepository;