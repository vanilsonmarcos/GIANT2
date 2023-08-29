import { z } from "zod";
import ApoliceTipoSchema from "./ApoliceTipoSchema";
import SiglaSchema from "./SiglaSchema";

const CoberturaSchema = z.object({
    id: z.number().optional(),
    sigla: SiglaSchema,
    nome: z.string(),
    descricao: z.string(),
    apolice_tipo: ApoliceTipoSchema,
    valor_pagar: z.number(),
    desconto: z.number(),
    cobertura_base: z.boolean({
        required_error: "Cobertura base é um campo obrigatório",
        invalid_type_error: "Cobertura base deve ser do tipo boolean (true ou false)",
    }),
});

export default CoberturaSchema;