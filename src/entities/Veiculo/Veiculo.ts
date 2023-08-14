import VeiculoCategoria from "./VeiculoCategoria";

interface Veiculo {
    id?: Number,
    veiculo_categoria: VeiculoCategoria ,
    matricula: String,
    marca: String,
    modelo: String,
    ano_aquisicao: Number,
    capital_aquisicao: Number,
    peso_bruto: Number,
    n_lotacao: Number,
    ano_fabrico: Number,
    cilindrada: number,
    ref_chassi: String,
    descricao: String,
    inserido_por?: Number,
    actualizado_por?: Number 
}

export default Veiculo;