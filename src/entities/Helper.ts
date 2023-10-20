import { preco_cilindrada } from "@prisma/client";
import PrecoCilindrada from "./PrecoCilindrada";


function generatePrecoCilindrada(data: preco_cilindrada): PrecoCilindrada {
    let precoClinidrada: PrecoCilindrada = {
        id: data.ID,
        nome: data.NOME,
        lotacao: data.LOTACAO,
        veiculo_categoria_id: data.VEICULO_CATEGORIA_ID,
        premio_trimestral: data.PREMIO_TRIMESTRAL.toNumber(),
        premio_semestral:data.PREMIO_SEMESTRAL.toNumber(),
        premio_anual: data.PREMIO_ANUAL.toNumber(),
        peso_kg: data.PESO_KG,
        cilindrada_min: data.CILINDRADA_MIN,
        cilindrada_max: data.CILINDRADA_MAX
    }
    return precoClinidrada;
}

export default generatePrecoCilindrada;