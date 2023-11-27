import 'reflect-metadata';
import { Service, Inject } from "typedi";
import CoberturaRepository from "../repositories/mysql/CoberturaRepository";
import { cobertura } from '@prisma/client';

// Add the business logic here
@Service()
class CoberturaService {
    @Inject(() => CoberturaRepository) 
    private repo: CoberturaRepository;

    constructor () {}

    async getAll(): Promise<cobertura[]> {
        return this.repo.getAll();         
    }

    async getByID(id: string): Promise<cobertura>{
        return this.repo.getByID(id);
    }

    async getByApoliceTipo(id: string): Promise<cobertura>{
        return this.repo.getByID(id);
    }

    async criar(cobertura: cobertura): Promise<cobertura> {
        return this.repo.create(cobertura);
    } 

    async actualizar(id: string, cobertura: cobertura) {
        return this.repo.update(id, cobertura);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
}

export default CoberturaService;