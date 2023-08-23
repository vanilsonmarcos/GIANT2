import Pessoa from "../entities/Pessoa/Pessoa";
import IGenericRepository from "../repositories/IGenericRepository";

class PessoaService {
    private repo:IGenericRepository<Pessoa>;

    constructor (repository:IGenericRepository<Pessoa>) {
        this.repo = repository; 
    }

}

export default PessoaService;