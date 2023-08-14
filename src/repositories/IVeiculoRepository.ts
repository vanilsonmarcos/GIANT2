import IGenericRepository from "./IGenericRepository";

interface IVeiculoReposiroty<T> extends IGenericRepository<T> {
    getVeiculoByMatricola(matricula: String): Promise<T |Boolean>;
}

export default IVeiculoReposiroty;