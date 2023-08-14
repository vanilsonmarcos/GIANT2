import VeiculoCategoria from "../entities/Veiculo/VeiculoCategoria";

interface IVeiculoCategoria<T extends VeiculoCategoria> {
    getAllVeiculoCategoria():Promise<T[]> ;
    getVeiculoCategoriaByID(id: String): Promise<T>;
}

export default IVeiculoCategoria;