import IGenericRepository from "./IGenericRepository";

interface IVeiculoReposiroty<T> extends IGenericRepository<T> {
    getVeiculoByMatricula(matricula: string): Promise<T>;
}

export default IVeiculoReposiroty;