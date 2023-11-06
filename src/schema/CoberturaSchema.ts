import { z } from "zod";
import ApoliceTipoSchema from "./ApoliceTipoSchema";
import SiglaSchema from "./SiglaSchema";
import Identifier from "./Identifier";

const CoberturaSchema = z.object({
    id: Identifier.optional(),
    sigla: SiglaSchema,
    nome: z.string(),
    apolice_tipo_id: Identifier,
    descricao: z.string(),
    valor_a_pagar: z.number(),
    desconto: z.number(),
    cobertura_base: z.boolean({
        required_error: "Cobertura base é um campo obrigatório",
        invalid_type_error: "Cobertura base deve ser do tipo boolean (true ou false)",
    }),
});

export default CoberturaSchema;