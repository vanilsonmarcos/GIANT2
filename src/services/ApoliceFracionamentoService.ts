import { Service, Inject } from "typedi";
import IGenericRepository from "../repositories/IGenericRepository";
import { apolice_fracionamento } from "@prisma/client";
import ApoliceFracionamentoRepository from "../repositories/mysql/ApoliceFracionamentoRepository";

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

    async criar(item: apolice_fracionamento): Promise<apolice_fracionamento> {
        return this.repo.create(item);
    } 

    async actualizar(id: string, item: apolice_fracionamento): Promise<apolice_fracionamento> {
        return this.repo.update(id, item);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }

}

export default ApoliceFracionamentoService; 