import { z } from "zod";
import Identifier from "./Identifier";
import DateSchema from "./DateSchema";

const PessoaSchema = z.object({
    id: Identifier.optional(),
    nome: z.string(),
    pessoa_tipo_id: Identifier,
    data_nascimento: DateSchema,
    sexo: z.string().length(1),
    nbi: z.string(),
    nif: z.string(),
    estado_civil: z.string().length(1),
});

export default PessoaSchema;