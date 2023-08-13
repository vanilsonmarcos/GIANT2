import Pessoa from "../../entities/Pessoa/Pessoa";
import IGenericRepository from "../IGenericRepository";
import IPessoaRepository from "../IPessoaRepository";


class PessoaRepository implements IGenericRepository<Pessoa>, IPessoaRepository<Pessoa>{
    constructor () {
        
    }
    getAll(): Promise<Pessoa[]> {
        


        throw new Error("Method not implemented.");
    }
    getByID(id: String): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    create(item: Pessoa): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: Pessoa): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    getPersonByPhoneNumber(phone_number: String): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    getPersonByEmail(email: String): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    getPersonByNIF(nif: String): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    getPersonByNBI(nbi: String): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }

}

export default PessoaRepository;