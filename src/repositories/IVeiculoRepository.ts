import IGenericRepository from "./IGenericRepository";

interface IVeiculoReposiroty<T> extends IGenericRepository<T> {
    getVeiculoByMatricula(matricula: String): Promise<T |Boolean>;
}

export default IVeiculoReposiroty;