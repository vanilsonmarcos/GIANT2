import IGenericRepository from "./IGenericRepository";

interface IVeiculoRepository<T> extends IGenericRepository<T> {
    getVeiculoByMatricula(matricula: string): Promise<T>;
}

export default IVeiculoRepository;