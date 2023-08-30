import IGenericRepository from "./IGenericRepository";

interface IPessoaRepository<T> extends IGenericRepository<T>{
    getPersonByPhoneNumber(phone_number: String): Promise<T>;
    getPersonByEmail(email: String): Promise<T>;
    getPersonByNIF(nif: String): Promise<T>;
    getPersonByNBI(nbi: String): Promise<T>;
}

export default IPessoaRepository;