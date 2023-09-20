import Ficheiro from "../../entities/Ficheiro/Ficheiro";
import IGenericRepository from "../IGenericRepository";

class FicheiroRepository implements IGenericRepository<Ficheiro>{

    constructor() {}
    getAll(): Promise<Ficheiro[]> {
        throw new Error("Method not implemented.");
    }
    getByID(id: String): Promise<Ficheiro> {
        throw new Error("Method not implemented.");
    }
    create(item: Ficheiro): Promise<Ficheiro> {
        throw new Error("Method not implemented.");
    }
    update(id: String, item: Ficheiro): Promise<Ficheiro> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<Boolean> {
        throw new Error("Method not implemented.");
    }
}

export default FicheiroRepository;