import { z } from "zod";
import Identifier from "./Identifier";

const PessoaTipoSchema = z.object({
    id: Identifier,
    nome: z.string()
});

export default PessoaTipoSchema;