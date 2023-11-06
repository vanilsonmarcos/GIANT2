import {z} from "zod";
import VeiculoCategoriaSchema from "./VeiculoCategoriaSchema";
import Identifier from "./Identifier";

const VeiculoSchema = z.object({
    id: Identifier.optional(),
    veiculo_categoria_id: Identifier,
    matricula: z.string(),
    marca: z.string(),
    modelo: z.string(),
    ano_aquisicao: z.number(),
    capital_aquisicao: z.number(),
    peso_bruto: z.number(),
    n_lotacao: z.number(),
    ano_fabrico: z.number(),
    cilindrada: z.number(),
    ref_chassi: z.string(),
    descricao: z.string(),
})

export default VeiculoSchema;