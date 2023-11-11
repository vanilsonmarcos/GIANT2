import IGenericRepository from "./IGenericRepository";

interface IPessoaRepository<T> extends IGenericRepository<T>{
    getPersonByPhoneNumber(phone_number: string): Promise<T>;
    getPersonByEmail(email: string): Promise<T>;
    getPersonByNIF(nif: string): Promise<T>;
    getPersonByNBI(nbi: string): Promise<T>;
}

export default IPessoaRepository;