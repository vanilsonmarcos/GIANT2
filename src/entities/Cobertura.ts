import ApoliceTipo from "./Apolice/ApoliceTipo";

interface Cobertura {
    id?: Number,
    sigla: String,
    nome: String,
    descricao: String,
    apolice_tipo: ApoliceTipo,
    data_criacao?: String,
    data_actualizacao?: String,
    valor_pagar: Number,
    desconto: Number,
    cobertura_base: Boolean
}

export default Cobertura;