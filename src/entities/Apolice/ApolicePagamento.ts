interface ApolicePagamento {
    id: Number,
    apolice_id: Number,
    descontos: Number,
    valor_pago: Number,
    inserido_por?: number,
    data_insercao: String,
}

export default ApolicePagamento;
