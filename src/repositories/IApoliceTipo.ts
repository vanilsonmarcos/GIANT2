import ApoliceTipo from "../entities/Apolice/ApoliceTipo";

interface IApoliceTipo<T extends ApoliceTipo> {
    getApoliceTipoByApoliceID(id:String): Promise<T|Boolean>;
    addApoliceTipo(apoliceTipo: ApoliceTipo):Promise<Boolean>
}

export default IApoliceTipo;