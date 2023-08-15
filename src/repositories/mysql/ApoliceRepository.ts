import Apolice from "../../entities/Apolice/Apolice";
import IGenericRepository from "../IGenericRepository";

class ApoliceRepository implements IGenericRepository<Apolice> {
    async getAll(): Promise<Apolice[]> {
        throw new Error("Method not implemented.");
    }
    async getByID(id: String): Promise<Boolean | Apolice> {
        throw new Error("Method not implemented.");
    }
    async create(item: Apolice): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    async update(id: string, item: Apolice): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
    async delete(id: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }

}

export default ApoliceRepository;  