import VeiculoCategoria from "./VeiculoCategoria";

interface Veiculo {
    id?: number,
    veiculo_categoria_id: number,
    matricula: string,
    marca: string,
    modelo: string,
    ano_aquisicao: number,
    capital_aquisicao: number,
    peso_bruto: number,
    n_lotacao: number,
    ano_fabrico: number,
    cilindrada: number,
    ref_chassi: string,
    descricao: string
}

export default Veiculo;