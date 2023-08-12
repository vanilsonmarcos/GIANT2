import {getRepository, Repository} from 'typeorm';
import IGenericRepository from "../IGenericRepository";
import IPessoaRepository from "../IPessoaRepository";


class PessoaRepository implements IGenericRepository, IPessoaRepository{
    private ormRepository: Repository<TypeormBook>;
    constructor () {
        this.ormRepository = getRepository()
    }

}

export default PessoaRepository;