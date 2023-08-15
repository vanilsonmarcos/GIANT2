import VeiculoCategoria from "../entities/Apolice/Veiculo/VeiculoCategoria";

interface IVeiculoCategoria<T extends VeiculoCategoria> {
    getAllVeiculoCategoria():Promise<T[]> ;
    getVeiculoCategoriaByID(id: String): Promise<T| Boolean>;
}

export default IVeiculoCategoria;