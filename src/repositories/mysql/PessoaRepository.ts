import Pessoa from "../../entities/Pessoa/Pessoa";
import IGenericRepository from "../IGenericRepository";
import IPessoaRepository from "../IPessoaRepository";


class PessoaRepository implements IGenericRepository<Pessoa>, IPessoaRepository<Pessoa>{
    constructor () {
        
    }

}

export default PessoaRepository;