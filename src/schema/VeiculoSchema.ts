import {z} from "zod";
import VeiculoCaategoriaSchema from "./VeiculoCategoriaSchema";
const VeiculoSchema = z.object({
    id: z.number().optional(),
    veiculo_categoria: VeiculoCaategoriaSchema,
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
    inserido_por: z.number().optional(),
    actualizado_por: z.number().optional()
})

export default VeiculoSchema;