import { Inject, Service } from "typedi";
import PessoaRepository from "../repositories/mysql/PessoaRepository";
import IPessoaRepository from "../repositories/IPessoaRepository";
import { pessoa } from "@prisma/client";

@Service()
class PessoaService {
    @Inject(() => PessoaRepository)
    private repo:IPessoaRepository<pessoa>;

    constructor () {}

    getAll(): Promise<pessoa[]> {
        return this.repo.getAll();         
    }

    getByID(id: string): Promise<pessoa>{
        return this.repo.getByID(id);
    }
    
    getByPhoneNumber(phoneNumber: string) :Promise<pessoa> {
        return this.repo.getPersonByPhoneNumber(phoneNumber);
    }

    getByEmail(email: string): Promise<pessoa>{
        return this.getByEmail(email);
    }

    getByNIF(nif: string): Promise<pessoa> {
        return this.repo.getPersonByNIF(nif);
    }

    getByNBI(nbi: string): Promise<pessoa> {
        return this.repo.getPersonByNBI(nbi);
    }

    criar(pessoa: pessoa): Promise<pessoa> {
        return this.repo.create(pessoa);
    } 

    actualizar(id: string, pessoa: pessoa) {
        return this.repo.update(id, pessoa);
    }

    remover(id: string): Promise<boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
}

export default PessoaService;
