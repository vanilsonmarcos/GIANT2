import { Inject, Service } from "typedi";
import Ficheiro from "../entities/Ficheiro/Ficheiro";
import FicheiroRepository from "../repositories/mysql/FicheiroRepository";
import IGenericRepository from "../repositories/IGenericRepository";

@Service()
class FicheiroService {
    @Inject(() => FicheiroRepository)
    private repo:IGenericRepository<Ficheiro>;

    constructor() { }

    getAll(): Promise<Ficheiro[]> {
        return this.repo.getAll();     
    }
    getByID(id: String): Promise<Ficheiro> {
        return this.repo.getByID(id);
    }
    criar(item: Ficheiro): Promise<Ficheiro> {
        
        return this.repo.create(item);
    }
    actualizar(id: String, item: Ficheiro): Promise<Ficheiro> {
        return this.repo.update(id, item);
    }
    remover(id: String): Promise<Boolean> {
        return this.repo.delete(id);
    }
}

export default FicheiroService;