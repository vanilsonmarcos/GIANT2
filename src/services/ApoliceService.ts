import { Service, Inject } from "typedi";
import ApoliceRepository from "../repositories/mysql/ApoliceRepository";
import { apolice } from "@prisma/client";
import CustomError from "../utils/CustomError";

@Service()
class ApoliceService {
    @Inject(()=> ApoliceRepository)
    private repo: ApoliceRepository;

    constructor () {}

    async getAll(): Promise<apolice[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<apolice>{
        return this.repo.getByID(id);
    }

    async exists(id:string): Promise<boolean> {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
    }

    async criar(apolice: apolice): Promise<apolice> {
        return this.repo.create(apolice);
    } 

    async actualizar(id: string, apolice: apolice): Promise<apolice> {
        return this.repo.update(id, apolice);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        if(!await this.exists(id)) {
            throw new CustomError("A Apólice que deseja remover não existe!");
        }
        return this.repo.delete(id);
    }

    async getAllApoliceEstado() {
        return this.repo.getAllApoliceEstado();
    } 

}

export default ApoliceService; 