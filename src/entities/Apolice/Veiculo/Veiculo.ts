interface Veiculo {
    id?: Number,
    veiculo_categoria_id: Number,
    matricola: String,
    marca: String,
    modelo: String,
    ano_aquisicao: Number,
    capital_aquisicao: Number,
    peso_bruto: Number,
    n_lotacao: Number,
    ano_fabrico: Number,
    cilindrada: Number,
    ref_chassi: String,
    descricao: String
    inserido_por: Number
    actualizado_por: Number
}

export default Veiculo;