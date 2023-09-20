import { z } from "zod";
import Identifier from "./Identifier";
import PessoaEnderecoSchema from "./PessoaEnderecoSchema";
import DateSchema from "./DateSchema";
import PessoaTipoSchema from "./PessoaTipoSchema";

const PessoaSchema = z.object({
    id: Identifier.optional(),
    nome: z.string(),
    pessoa_tipo: PessoaTipoSchema,
    data_nascimento: DateSchema,
    sexo: z.string().length(1),
    nbi: z.string(),
    nif: z.string(),
    estado_civil: z.string().length(1),
    endereco: PessoaEnderecoSchema
});

export default PessoaSchema;