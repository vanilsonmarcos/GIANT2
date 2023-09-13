import { Inject, Service } from "typedi";
import Pessoa from "../entities/Pessoa/Pessoa";
import PessoaRepository from "../repositories/mysql/PessoaRepository";
import IPessoaRepository from "../repositories/IPessoaRepository";

@Service()
class PessoaService {
    @Inject(() => PessoaRepository)
    private repo:IPessoaRepository<Pessoa>;

    constructor () {}

    async getAll(): Promise<Pessoa[]> {
        return await this.repo.getAll();         
    }

    async getByID(id: String): Promise<Pessoa>{
        return await this.repo.getByID(id);
    }
    
    async getByPhoneNumber(phoneNumber: String) :Promise<Pessoa> {
        return await this.repo.getPersonByPhoneNumber(phoneNumber);
    }

    async getByEmail(email: String): Promise<Pessoa>{
        return this.getByEmail(email);
    }

    async getByNIF(nif: String): Promise<Pessoa> {
        return this.repo.getPersonByNIF(nif);
    }

    async getByNBI(nbi: String): Promise<Pessoa> {
        return this.repo.getPersonByNBI(nbi);
    }

    async criar(pessoa: Pessoa): Promise<Pessoa> {
        return await this.repo.create(pessoa);
    } 

    async actualizar(id: String, pessoa: Pessoa) {
        return await this.repo.update(id, pessoa);
    }

    async remover(id: String): Promise<Boolean> {
        // check if object exist
        return await this.repo.delete(id);
    }
}

export default PessoaService;