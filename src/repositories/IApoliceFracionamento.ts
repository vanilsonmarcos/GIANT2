import ApoliceFracionamento from "../entities/Apolice/ApoliceFracionamento";

interface IApoliceFracionamento<T extends ApoliceFracionamento> {
    getApoliceFracionamentoByApoliceID(id: String):Promise<ApoliceFracionamento| Boolean>;
    setApoliceFracionamentoByApoliceID(id: String):Promise<Boolean>;
}

export default IApoliceFracionamento;