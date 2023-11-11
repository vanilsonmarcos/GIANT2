import { Service, Inject } from "typedi";
import IGenericRepository from "../repositories/IGenericRepository";
import { apolice_tipo } from "@prisma/client";
import ApoliceTipoRepository from "../repositories/mysql/ApoliceTipoRepository";

@Service()
class ApoliceTipoService {
    @Inject(()=> ApoliceTipoRepository)
    private repo: IGenericRepository<apolice_tipo>;

    constructor () {}

    async getAll(): Promise<apolice_tipo[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<apolice_tipo>{
        return this.repo.getByID(id);
    }

    async criar(item: apolice_tipo): Promise<apolice_tipo> {
        return this.repo.create(item);
    } 

    async actualizar(id: string, item: apolice_tipo): Promise<apolice_tipo> {
        return this.repo.update(id, item);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }

}

export default ApoliceTipoService; 