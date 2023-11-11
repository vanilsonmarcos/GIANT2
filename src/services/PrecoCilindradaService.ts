import { Service, Inject } from "typedi";
import PrecoCilindradaRepository from "../repositories/mysql/PrecoCilindradaRepository";
import IGenericRepository from "../repositories/IGenericRepository";
import { preco_cilindrada } from "@prisma/client";

@Service()
class PrecoCilindradaService {
    @Inject(() => PrecoCilindradaRepository)
    private repo: IGenericRepository<preco_cilindrada>;

    constructor(){}
    
    async getAll(): Promise<preco_cilindrada[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<preco_cilindrada>{
        return this.repo.getByID(id);
    }

    async criar(preco_cilindrada: preco_cilindrada): Promise<preco_cilindrada> {
        return this.repo.create(preco_cilindrada);
    } 

    async actualizar(id: string, precoCilindrada: preco_cilindrada) {
        return this.repo.update(id, precoCilindrada);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
}

export default PrecoCilindradaService;