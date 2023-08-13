interface ApoliceCobertura {
    id: Number,
    apolice_tipo_id:Number
    cobertura_base: Boolean,
    sigla: String,
    nome: String,
    descricao: String,
    inserido_por: Number,
    actualizado_por: Number,
    removido_por: Number,
    valor_a_pagar: Number,
    desconto: Number

}

export default ApoliceCobertura;