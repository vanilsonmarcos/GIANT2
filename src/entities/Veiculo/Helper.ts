import { veiculo } from "@prisma/client";
import Veiculo from "./Veiculo";

function generateVeiculo(data: veiculo): Veiculo {
    let veiculo: Veiculo = {
        id: data.ID,
        veiculo_categoria_id: data.VEICULO_CATEGORIA_ID,
        matricula: data.MATRICULA,
        marca: data.MARCA,
        modelo: data.MODELO,
        ano_aquisicao: data.ANO_AQUISICAO,
        capital_aquisicao: data.CAPITAL_AQUISICAO.toNumber(),
        peso_bruto: data.PESO_BRUTO,
        n_lotacao: data.N_LOTACAO,
        ano_fabrico: data.ANO_FABRICO,
        cilindrada: data.CILINDRADA,
        ref_chassi: data.REF_CHASSI,
        descricao: data.DESCRICAO
    }
    return veiculo;
}

export default generateVeiculo;