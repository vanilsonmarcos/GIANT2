import { RowDataPacket } from "mysql2";
import PrecoCilindrada from "./PrecoCilindrada";
import VeiculoCategoria from "./Apolice/Veiculo/VeiculoCategoria";


function generatePrecoCilindrada(data: RowDataPacket): PrecoCilindrada {
    let veiculoCategoria: VeiculoCategoria = {
        id: data['CATEGORIA_ID'],
        nome: data['CATEGORIA_NOME']
    }

    let precoClinidrada: PrecoCilindrada = {
        id: data['ID'],
        nome: data['NOME'],
        lotacao: data['LOTACAO'],
        veiculo_categoria: veiculoCategoria,
        premio_trimestral: data['PREMIO_TRIMESTRAL'],
        premio_semestral:data['PREMIO_SEMESTRAL'],
        premio_anual: data['PREMIO_ANUAL'],
        peso_kg: data['PESO_Kg'],
        cilindrada_min: data['CILINDRADA_MIN'],
        cilindrada_max: data['CILINDRADA_MAX']
    }

    return precoClinidrada;
}

export default generatePrecoCilindrada;