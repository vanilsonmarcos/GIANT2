interface ApoliceCobertura {
    id: Number,
    sigla: String,
    nome: String,
    descricao: String,
    apolice_tipo_id: Number,
    inserido_por: Number,
    actualizado_por: Number,
    removido_por: Number,
    valor_a_pagar: Number,
    desconto: Number
}

export default ApoliceCobertura;