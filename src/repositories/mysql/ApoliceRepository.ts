import { RowDataPacket } from "mysql2/promise";
import { query } from "./mysql";
import IGenericRepository from "../IGenericRepository";
import Apolice from "../../entities/Apolice/Apolice";
class ApoliceRepository implements IGenericRepository<Apolice>{
    constructor() { }
    getAll(): Promise<Apolice[]> {
        throw new Error("Method not implemented.");
    }
    getByID(id: String): Promise<Apolice> {
        throw new Error("Method not implemented.");
    }
    create(item: Apolice): Promise<Apolice> {
        throw new Error("Method not implemented.");
    }
    update(id: String, item: Apolice): Promise<Apolice> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}

export default ApoliceRepository;  