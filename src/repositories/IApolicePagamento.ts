import ApolicePagamento from "../entities/Apolice/ApolicePagamento";

interface IApolicePagamento<T extends ApolicePagamento> {
    getApolicePagamentoByApoliceID(id: String):Promise <T| Boolean>;
    getAllApolicePagamentoByApoliceID(id: String):Promise <T[]| Boolean>;
    addApolicePagamentoByApoliceID(id:String, ApolicePagamento: ApolicePagamento):Promise<Boolean>
}

export default IApolicePagamento; 