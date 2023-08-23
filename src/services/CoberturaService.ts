import 'reflect-metadata';
import { Service, Inject, Container } from "typedi";
import Cobertura from "../entities/Cobertura";
import IGenericRepository from "../repositories/IGenericRepository";
import CoberturaRepository from "../repositories/mysql/CoberturaRepository";

@Service()
class CoberturaService {
    @Inject(() => CoberturaRepository) 
    private repo: IGenericRepository<Cobertura>;

    constructor () {}

    async getAll(): Promise<Cobertura[]> {
        try {
            return await this.repo.getAll();         
        } catch (error) {
            throw Error("Ocorreu um erro ao carregar os dados das Coberturas");
        }
    }

    async getByID(id: String): Promise<Cobertura>{
        try {
            const result = await this.repo.getByID(id);
            if(typeof result === "boolean" ) {
                throw Error("Não foi encontrado a Cobertura com o referente id");
            }
            return result;
        } catch (error) {
            throw Error("Ocorreu um erro ao carregar os dados da Cobertura");
        }
    }

    async criar(cobertura: Cobertura) {
        try {
            const result = await this.repo.create(cobertura);
            if (typeof result === "boolean") {
                throw Error("Ocorreu um erro ao criar a Cobertura");
            }
            return result;
        } catch (error) {
            throw Error("Ocorreu um erro ao criar a Cobertura");
        }
    } 

    async actualizar(id: String, cobertura: Cobertura) {
        try {
            const result = await this.repo.update(id, cobertura);
            if(typeof result === "boolean"){
                throw Error("Ocorreu um erro ao actualizar os dados da cobertura");
            }
            return result;
        } catch (error) {
            throw Error("Ocorreu um erro ao actualizar os dados da Cobertura");
        }
    }

    async remover(id: String) {
        try {
            const result = await this.repo.delete(id);
            if (!result) {
                throw Error("Ocorreu um erro ao remover a Cobertura");
            }
            return result 
        } catch (error) {
            throw Error("Ocorreu erro ao remover os dados da Cobertura");
        }
    }
}

export default CoberturaService;