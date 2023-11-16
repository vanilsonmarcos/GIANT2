import { Inject, Service } from "typedi";
import PessoaRepository from "../repositories/mysql/PessoaRepository";
import IPessoaRepository from "../repositories/IPessoaRepository";
import { pessoa } from "@prisma/client";
import Pessoa from "../entities/Pessoa/Pessoa";

@Service()
class PessoaService {
    @Inject(() => PessoaRepository)
    private repo:IPessoaRepository<Pessoa>;

    constructor () {}

    getAll(): Promise<Pessoa[]> {
        return this.repo.getAll();         
    }

    getByID(id: string): Promise<Pessoa>{
        return this.repo.getByID(id);
    }
    
    getByPhoneNumber(phoneNumber: string) :Promise<Pessoa> {
        return this.repo.getPersonByPhoneNumber(phoneNumber);
    }

    getByEmail(email: string): Promise<Pessoa>{
        return this.repo.getPersonByEmail(email);
    }

    getByNIF(nif: string): Promise<Pessoa> {
        return this.repo.getPersonByNIF(nif);
    }

    getByNBI(nbi: string): Promise<Pessoa> {
        return this.repo.getPersonByNBI(nbi);
    }

    criar(pessoa: Pessoa): Promise<Pessoa> {
        return this.repo.create(pessoa);
    } 

    actualizar(id: string, pessoa: Pessoa) {
        return this.repo.update(id, pessoa);
    }

    remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
}

export default PessoaService;
