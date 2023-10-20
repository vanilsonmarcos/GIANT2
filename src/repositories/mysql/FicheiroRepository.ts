import { Service } from "typedi";
import Ficheiro from "../../entities/Ficheiro/Ficheiro";
import IGenericRepository from "../IGenericRepository";
import { RowDataPacket } from "mysql2";
import { queryWithValues } from "./mysql";
import generateFicheiro from "../../entities/Ficheiro/Helper";
import prisma from "../PrismaClient";
@Service()
class FicheiroRepository implements IGenericRepository<Ficheiro>{

    constructor() {}
    
    getAll(): Promise<Ficheiro[]> {
        throw new Error("Method not implemented.");
    }
    
    async getByID(id: String): Promise<Ficheiro> {
        throw new Error("Method not implemented.");

    }

    update(id: String, item: Ficheiro): Promise<Ficheiro> {
        throw new Error("Method not implemented.");
    }

    async delete(id: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}

export default FicheiroRepository;