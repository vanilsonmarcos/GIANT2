import { Service } from "typedi";

import IGenericRepository from "../IGenericRepository";
import Apolice from "../../entities/Apolice/Apolice";
@Service()
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