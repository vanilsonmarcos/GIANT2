import { z } from "zod";
import Identifier from "./Identifier";
const ApoliceFracionamentoSchema = z.object({
    id: Identifier,
    fracionado_em: z.string(),
    no_fracoes: z.number()
})

export default ApoliceFracionamentoSchema;