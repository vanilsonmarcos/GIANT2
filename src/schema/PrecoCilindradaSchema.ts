import {z} from "zod";
import Identifier from "./Identifier";
import VeiculoCategoriaSchema from "./VeiculoCategoriaSchema";

const PrecoCilindradaSchema = z.object({
    id: Identifier.optional(),
    nome: z.string(),
    lotacao: z.number(),
    veiculo_categoria: VeiculoCategoriaSchema,
    premio_trimestral: z.number(),
    premio_semestral: z.number(),
    premio_anual: z.number(),
    peso_kg: z.number(),
    cilindrada_min: z.number(),
    cilindrada_max: z.number(),
});

export default PrecoCilindradaSchema;