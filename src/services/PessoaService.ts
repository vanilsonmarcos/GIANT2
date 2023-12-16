import { Inject, Service } from "typedi";
import PessoaRepository from "../repositories/mysql/PessoaRepository";
import IPessoaRepository from "../repositories/IPessoaRepository";
import { pessoa, pessoa_tipo } from "@prisma/client";
import Pessoa from "../entities/Pessoa/Pessoa";
import PessoaTipoRepository from "../repositories/mysql/PessoaTipoRepository";
import CustomError from "../utils/CustomError";

@Service()
class PessoaService {
    @Inject(() => PessoaRepository)
    private pessoa_repo:IPessoaRepository<Pessoa>;
    @Inject(() => PessoaTipoRepository)
    private pessoa_tipo_repo:PessoaTipoRepository;

    
    constructor () {}
    
    async getAllPessoaTipo():Promise<pessoa_tipo[]> {
        return this.pessoa_tipo_repo.getAll();
    }
    
    async getAll(): Promise<Pessoa[]> {
        return this.pessoa_repo.getAll();         
    }
    
    async getAllclientes(): Promise<Pessoa[]> {
        return this.pessoa_repo.getAllClientes();
    }

    async getByID(id: string): Promise<Pessoa>{
        return this.pessoa_repo.getByID(id);
    }

    async exists(id: string): Promise<boolean> {
        const item = await this.getByID(id);
        return item !== null && item !== undefined;
    }
    
    async getByPhoneNumber(phoneNumber: string) :Promise<Pessoa> {
        return this.pessoa_repo.getPersonByPhoneNumber(phoneNumber);
    }

    async getByEmail(email: string): Promise<Pessoa>{
        return this.pessoa_repo.getPersonByEmail(email);
    }

    async getByNIF(nif: string): Promise<Pessoa> {
        return this.pessoa_repo.getPersonByNIF(nif);
    }

    async getByNBI(nbi: string): Promise<Pessoa> {
        return this.pessoa_repo.getPersonByNBI(nbi);
    }

    async criar(pessoa: Pessoa): Promise<Pessoa> {
        return this.pessoa_repo.create(pessoa);
    } 

    async actualizar(id: string, pessoa: Pessoa) {
        return this.pessoa_repo.update(id, pessoa);
    }

    async remover(id: string): Promise<boolean> {
        // check if object exist
        if(!await this.exists(id)) {
            throw new CustomError("A Pessoa que deseja remover não existe!");
        }
        return this.pessoa_repo.delete(id);
    }
}

export default PessoaService;
