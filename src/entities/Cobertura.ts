import ApoliceTipo from "./Apolice/ApoliceTipo";

interface Cobertura {
    id?: number,
    sigla: string,
    nome: string,
    descricao: string,
    apolice_tipo_id: number,
    data_criacao?: string,
    data_actualizacao?: string,
    valor_pagar: number,
    desconto: number,
    cobertura_base: boolean
}

export default Cobertura;