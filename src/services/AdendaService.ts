import { Service, Inject } from "typedi";
import IGenericRepository from "../repositories/IGenericRepository";
import { adenda } from "@prisma/client";
import AdendaRepository from "../repositories/mysql/AdendaRepository";

@Service()
class AdendaService {
    @Inject(()=> AdendaRepository)
    private repo: IGenericRepository<adenda>;

    constructor () {}

    async getAll(): Promise<adenda[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<adenda>{
        return this.repo.getByID(id);
    }

    async criar(item: adenda): Promise<adenda> {
        return this.repo.create(item);
    } 

    async actualizar(id: string, item: adenda): Promise<adenda> {
        return this.repo.update(id, item);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }

}

export default AdendaService; 