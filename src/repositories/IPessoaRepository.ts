interface IPessoaRepository<T>{
    getPersonByPhoneNumber(phone_number: String): Promise<T | Boolean>;
    getPersonByEmail(email: String): Promise<T | Boolean>;
    getPersonByNIF(nif: String): Promise<T |Boolean>;
    getPersonByNBI(nbi: String): Promise<T| Boolean>;
}

export default IPessoaRepository;