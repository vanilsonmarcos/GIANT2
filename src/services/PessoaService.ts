import { Inject, Service } from "typedi";
import PessoaRepository from "../repositories/mysql/PessoaRepository";
import IPessoaRepository from "../repositories/IPessoaRepository";
import { pessoa, pessoa_tipo } from "@prisma/client";
import Pessoa from "../entities/Pessoa/Pessoa";
import PessoaTipoRepository from "../repositories/mysql/PessoaTipoRepository";

@Service()
class PessoaService {
    @Inject(() => PessoaRepository)
    private pessoa_repo:IPessoaRepository<Pessoa>;
    @Inject(() => PessoaTipoRepository)
    private pessoa_tipo_repo:PessoaTipoRepository;

    
    constructor () {}
    
    getAllPessoaTipo():Promise<pessoa_tipo[]> {
        return this.pessoa_tipo_repo.getAll();
    }
    
    getAll(): Promise<Pessoa[]> {
        return this.pessoa_repo.getAll();         
    }
    
    getAllclientes(): Promise<Pessoa[]> {
        return this.pessoa_repo.getAllClientes();
    }

    getByID(id: string): Promise<Pessoa>{
        return this.pessoa_repo.getByID(id);
    }
    
    getByPhoneNumber(phoneNumber: string) :Promise<Pessoa> {
        return this.pessoa_repo.getPersonByPhoneNumber(phoneNumber);
    }

    getByEmail(email: string): Promise<Pessoa>{
        return this.pessoa_repo.getPersonByEmail(email);
    }

    getByNIF(nif: string): Promise<Pessoa> {
        return this.pessoa_repo.getPersonByNIF(nif);
    }

    getByNBI(nbi: string): Promise<Pessoa> {
        return this.pessoa_repo.getPersonByNBI(nbi);
    }

    criar(pessoa: Pessoa): Promise<Pessoa> {
        return this.pessoa_repo.create(pessoa);
    } 

    actualizar(id: string, pessoa: Pessoa) {
        return this.pessoa_repo.update(id, pessoa);
    }

    remover(id: string): Promise<boolean> {
        // check if object exist
        return this.pessoa_repo.delete(id);
    }
}

export default PessoaService;
