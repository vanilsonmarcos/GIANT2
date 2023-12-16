import 'reflect-metadata';
import { Service, Inject } from "typedi";
import CoberturaRepository from "../repositories/mysql/CoberturaRepository";
import { cobertura } from '@prisma/client';
import CustomError from '../utils/CustomError';

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

    async exists(id: string): Promise<boolean> {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
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
        if(!await this.exists(id)) {
            throw new CustomError("A Cobertura que deseja remover não existe!");
        }
        return this.repo.delete(id);
    }

}

export default CoberturaService;