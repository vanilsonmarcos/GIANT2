import { Inject, Service } from "typedi";
import Pessoa from "../entities/Pessoa/Pessoa";
import PessoaRepository from "../repositories/mysql/PessoaRepository";
import IPessoaRepository from "../repositories/IPessoaRepository";

@Service()
class PessoaService {
    @Inject(() => PessoaRepository)
    private repo:IPessoaRepository<Pessoa>;

    constructor () {}

    getAll(): Promise<Pessoa[]> {
        return this.repo.getAll();         
    }

    getByID(id: String): Promise<Pessoa>{
        return this.repo.getByID(id);
    }
    
    getByPhoneNumber(phoneNumber: String) :Promise<Pessoa> {
        return this.repo.getPersonByPhoneNumber(phoneNumber);
    }

    getByEmail(email: String): Promise<Pessoa>{
        return this.getByEmail(email);
    }

    getByNIF(nif: String): Promise<Pessoa> {
        return this.repo.getPersonByNIF(nif);
    }

    getByNBI(nbi: String): Promise<Pessoa> {
        return this.repo.getPersonByNBI(nbi);
    }

    criar(pessoa: Pessoa): Promise<Pessoa> {
        return this.repo.create(pessoa);
    } 

    actualizar(id: String, pessoa: Pessoa) {
        return this.repo.update(id, pessoa);
    }

    remover(id: String): Promise<Boolean> {
        // check if object exist
        return this.repo.delete(id);
    }
}

export default PessoaService;