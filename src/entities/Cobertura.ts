import ApoliceTipo from "./Apolice/ApoliceTipo";

interface Cobertura {
    id?: number,
    sigla: string,
    nome: string,
    apolice_tipo_id: number,
    descricao: string,
    valor_a_pagar: number,
    desconto: number,
    cobertura_base: boolean
}

export default Cobertura;