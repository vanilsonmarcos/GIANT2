import { RowDataPacket } from "mysql2";
import Veiculo from "./Veiculo";
import VeiculoCategoria from "../../Veiculo/VeiculoCategoria";

function generateVeiculo(data: RowDataPacket): Veiculo {
    let VeiculoCategoria: VeiculoCategoria = {
        id: data['CATEGORIA_ID'],
        nome: data['CATEGORIA_NOME'],
    }
    let veiculo: Veiculo = {
        id: data['ID'],
        veiculo_categoria: VeiculoCategoria,
        matricula: data['MATRICULA'],
        marca: data['MARCA'],
        modelo: data['MODELO'],
        ano_aquisicao: data['ANO_AQUISICAO'],
        capital_aquisicao: data['CAPITAL_AQUISICAO'],
        peso_bruto: data['PESO_BRUTO'],
        n_lotacao: data['N_LOTACAO'],
        ano_fabrico: data['ANO_FABRICO'],
        cilindrada: data['CILINDRADA'],
        ref_chassi: data['REF_CHASSI'],
        descricao: data['DESCRICAO'],
        inserido_por: data['INSERIDO_POR'],
        actualizado_por: data['ACTUALIZADO_POR'] 
    }

    return veiculo;
}

export default generateVeiculo;