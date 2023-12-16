import { Service, Inject } from "typedi";
import PrecoCilindradaRepository from "../repositories/mysql/PrecoCilindradaRepository";
import IGenericRepository from "../repositories/IGenericRepository";
import { preco_cilindrada } from "@prisma/client";
import CustomError from "../utils/CustomError";

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

    async exists(id: string): Promise<boolean> {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
    }

    async criar(preco_cilindrada: preco_cilindrada): Promise<preco_cilindrada> {
        return this.repo.create(preco_cilindrada);
    } 

    async actualizar(id: string, precoCilindrada: preco_cilindrada) {
        return this.repo.update(id, precoCilindrada);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        if(!await this.exists(id)) {
            throw new CustomError("A O preço por cilindrada que deseja remover não existe!");
        }
        return this.repo.delete(id);
    }
}

export default PrecoCilindradaService;