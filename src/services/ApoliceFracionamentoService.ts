import { Service, Inject } from "typedi";
import IGenericRepository from "../repositories/IGenericRepository";
import { apolice_fracionamento } from "@prisma/client";
import ApoliceFracionamentoRepository from "../repositories/mysql/ApoliceFracionamentoRepository";
import CustomError from "../utils/CustomError";

@Service()
class ApoliceFracionamentoService {
    @Inject(()=> ApoliceFracionamentoRepository)
    private repo: IGenericRepository<apolice_fracionamento>;

    constructor () {}

    async getAll(): Promise<apolice_fracionamento[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<apolice_fracionamento>{
        return this.repo.getByID(id);
    }
    
    async exists(id: string) {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
    }

    async criar(item: apolice_fracionamento): Promise<apolice_fracionamento> {
        return this.repo.create(item);
    } 

    async actualizar(id: string, item: apolice_fracionamento): Promise<apolice_fracionamento> {
        return this.repo.update(id, item);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        if(!await this.exists(id)) {
            throw new CustomError("O Fracionamento de Apólice que deseja remover não existe!");
        }
        return this.repo.delete(id);
    }

}

export default ApoliceFracionamentoService; 