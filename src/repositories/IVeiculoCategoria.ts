
interface IVeiculoCategoria<T> {
    getAllVeiculoCategoria(): Promise<T[]> ;
    getVeiculoCategoriaByID(id: string): Promise<T>;
}

export default IVeiculoCategoria;