import 'reflect-metadata';
import { Service, Inject } from "typedi";
import Cobertura from "../entities/Cobertura";
import IGenericRepository from "../repositories/IGenericRepository";
import CoberturaRepository from "../repositories/mysql/CoberturaRepository";

// Add the business logic here
@Service()
class CoberturaService {
    @Inject(() => CoberturaRepository) 
    private repo: IGenericRepository<Cobertura>;

    constructor () {}

    async getAll(): Promise<Cobertura[]> {
        return this.repo.getAll();         
    }

    async getByID(id: String): Promise<Cobertura>{
        return this.repo.getByID(id);
    }

    async criar(cobertura: Cobertura): Promise<Cobertura> {
        return this.repo.create(cobertura);
    } 

    async actualizar(id: String, cobertura: Cobertura) {
        return this.repo.update(id, cobertura);
    }

    async remover(id: String): Promise<Boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
}

export default CoberturaService;