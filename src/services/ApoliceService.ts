import { Service, Inject } from "typedi";
import IGenericRepository from "../repositories/IGenericRepository";
import Apolice from "../entities/Apolice/Apolice";
import ApoliceRepository from "../repositories/mysql/ApoliceRepository";

@Service()
class ApoliceService {
    @Inject(()=> ApoliceRepository)
    private repo: IGenericRepository<Apolice>;

    constructor () {}

    async getAll(): Promise<Apolice[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<Apolice>{
        return this.repo.getByID(id);
    }

    async criar(apolice: Apolice): Promise<Apolice> {
        return this.repo.create(apolice);
    } 

    async actualizar(id: string, apolice: Apolice) {
        return this.repo.update(id, apolice);
    }

    async remover(id: string): Promise<Boolean> {
        // check if object exist
        return this.repo.delete(id);
    }

}

export default ApoliceService; 